import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CountdownTimer from '../../game_tools/CountdownTimer';
import robotImage from '../../assets/robot.png';
import manImage from '../../assets/man_win.png';
import tieImage from '../../assets/tie.png';
import GameShell from '../GameShell';
import './game.css';
import { HiColorSwatch } from 'react-icons/hi';


const ScrambledScriptGame = () =>{
  // The components below are more dynamic than vars housed within UseEffect, so we define them here.
  const { round } = useParams(); // grab the round num from the URL params
  const roundNumber = Number(round) || 1;
  const navigate = useNavigate(); // route to rounds
  const stopGameRef = useRef(() => {});
  const resetGameRef = useRef(() => {});
  const gameEndedRef = useRef(false);
  const svgWidth = useRef(0);
  const svgHeight = useRef(0);
  const radius = useRef(0);
  const [playerScore, setPlayerScore] = useState(0); // this to render
  const [computerScore, setComputerScore] = useState(0);
  const playerScoreRef = useRef(0); // this to update and store accurately on backend
  const computerScoreRef = useRef(0);
  const imgRef = useRef(null);
  const MODAL_COLOR = '#B6D5EBBF'; 

// NEW TESTING STATES
//

  // refs for HTML elements
  const svgRef = useRef(null);
  const gameKeyRef = useRef(null);
  const targetColorTextRef = useRef(null);
  const resultMessageRef = useRef(null);
  const gameOverPopupRef = useRef(null);
  const [gameOverMessage, setGameOverMessage] = useState("");
  
  // for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {   // resizeObserver to update SVG dimensions for screen orientation changes
    const observer = new ResizeObserver(() => {
      if (!svgRef.current) return;  // ensure svgRef available
      
      const rect = svgRef.current.getBoundingClientRect();
      svgWidth.current = rect.width;
      svgHeight.current = rect.height;

      radius.current = svgHeight.current * 0.10;  // update radius based on new height
      resetGameRef.current();   // reset game to apply new dimensions
    });

    if (svgRef.current) { // only if svgRef available
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) observer.unobserve(svgRef.current); // dismount 
    };
  }, []);

  useEffect(() => {   // logistics when game ends: SWITCH ROUNDS + LOG SCORES
    if (!show && gameEndedRef.current) {
      // store game scores in localStorage for scoreboard
      const curr_player_score = playerScoreRef.current || 0;
      const curr_computer_score = computerScoreRef.current || 0;
      const ROUND_4 = 4;

      // Save to localStorage
      const prevScores = JSON.parse(localStorage.getItem('scrambledscript_scores') || '[]');
      const filteredScores = prevScores.filter(score => score.roundNumber !== roundNumber); // remove repeated round scores (keep 1 per round!)
      const updatedScores = [...filteredScores, { roundNumber, curr_player_score, curr_computer_score }];
      updatedScores.sort((a, b) => a.roundNumber - b.roundNumber); // sort scores by round number (ascending order)
      localStorage.setItem('scrambledscript_scores', JSON.stringify(updatedScores));

      // redirect to next round when game ends (modal is closed)
      if (roundNumber < ROUND_4) {
        navigate(`/scrambled-script/round-${roundNumber + 1}`);
      } else {
        navigate(`/scrambled-script-play/recap/`); // Or to results/debrief page
      }
    }
  }, [show, roundNumber, navigate]);
  
  useEffect(() => {   // run game's mechanics
    if (!svgRef.current) {     // make sure the SVG canvas is available
      console.error("SVG canvas not found!");
      return;
    }
    // constant info
    const ROUND_1 = 1; const ROUND_2 = 2; const ROUND_3 = 3; const ROUND_4 = 4;

    //DYSLEXIA GAME  COLORS HAVE TO CHANGE
    const RED = 'red'; const GREEN = 'green'; const YELLOW = 'yellow';

    const COLOR1 = 'font'; const COLOR2 = 'bead'; const COLOR3 = 'boat';
    const COLOR4 = 'bag'; const COLOR5 = 'ball'; const COLOR6 = 'tag';
    const COLOR7 = 'hat'; const COLOR8 = 'bed'; const COLOR9 = 'tap';


    const colors_2 = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7, COLOR8, COLOR9];
    const word_colors = ["font", "bead", "boat", "bag", "ball", "tag", "hat", "bed", "tap"];
    const dsy_colors = ["heq", "peaq", "fonq", "qruz", "yat", "peq", "pepy", "fysn", "pirq"];    

    const gameKeyMessage3_4 = "Controls Key:<br>Left Mouse Button = Pop Balloons<br><br>Game Key:<br>R = Red<br>G = Green<br>Y = Yellow";
    const gameKeyMessage1_2 = "Controls Key:<br>Left Mouse Button = Pop Balloons";
    const numBalls = 9;
    const velocity = 1; // fixed ball velocity
    const { width, height } = svgRef.current.getBoundingClientRect(); // getBoundingClientRect to get initial rendered size of canvas
    
    svgWidth.current = width;
    svgHeight.current = height;
    radius.current = svgHeight.current * 0.10;
    gameEndedRef.current = false;

    let balls = [];
    let targetColor = '';
    let winMessage = "WINNER IS PLAYER!";
    let tieMessage = "IT'S A TIE!";
    let loseMessage = "WINNER IS COMPUTER!";

    let colors;  // adapted from how they defined colors in old version
      colors = [
        {color: COLOR1, color_val: '#A50638'},
        {color: COLOR2, color_val: '#C65B95'},
        {color: COLOR3, color_val: '#F8E4DC'},
        {color: COLOR4, color_val: '#83C9FF'},
        {color: COLOR5, color_val: '#D08169'},
        {color: COLOR6, color_val: '#FF4900'},
        {color: COLOR7, color_val: '#E2BAFF'},
        {color: COLOR8, color_val: '#D188B0'},
        {color: COLOR9, color_val: '#88D1A3'}
      ]
    

    // // display the game key
    // if (roundNumber === ROUND_3 || roundNumber === ROUND_4) {
    //     gameKeyRef.current.innerHTML = gameKeyMessage3_4;
    // } else {
    //     gameKeyRef.current.innerHTML = gameKeyMessage1_2;
    // }

    /************** 
    GAME MECHANICS 
    ***************/

    function stopGame() {
        if (gameEndedRef.current) return; // if game ended, do nothing
        gameEndedRef.current = true;

        // show popup (msg based on win/lose)
        let didWin = playerScoreRef.current > computerScoreRef.current;
        let didTie = playerScoreRef.current === computerScoreRef.current;
        if (didTie) {
          setGameOverMessage(tieMessage); 
        } else {
          setGameOverMessage(didWin ? winMessage : loseMessage);
        }

        if (didWin) {
          imgRef.current = manImage;
        } else if (didTie) {
          imgRef.current = tieImage;
        } else {
          imgRef.current = robotImage;
        }

        handleShow() // show popup

        // make balls inaccessible to screen readers when game ends
        balls.forEach(ball => {
            const el = ball.element;
            el.removeAttribute('tabindex');
            el.removeAttribute('aria-label');
            el.setAttribute('aria-hidden', 'true');
            el.style.pointerEvents = 'none';
        });
    }

    function resetGame() {
        setTargetColor();
        createBalls();
        // potentially set a wait here!
    }

    function setTargetColor() { // for the game, pick random target color that isn't yellow
        targetColor = colors_2[Math.floor(Math.random() * colors_2.length)];
        targetColorTextRef.current.textContent = `Pop ${targetColor}!`; // do we want this text to be colored according to the target color?
    }

    /************** 
    BALL FUNCTIONS 
    ***************/
    function getRandomPosition() {
        return {
            x: Math.random() * (svgWidth.current - 2 * radius.current) + radius.current,
            y: Math.random() * (svgHeight.current - 2 * radius.current) + radius.current,
            dx: velocity * (Math.random() < 0.5 ? 1 : -1), // fixed speed, rand direction
            dy: velocity * (Math.random() < 0.5 ? 1 : -1) 
        };
    }

    function createBalls() {
        balls = [];
        svgRef.current.innerHTML = ''; // Clear previous balls

        for (let i = 0; i < numBalls; i++) {
            const { x, y, dx, dy } = getRandomPosition();
            const { color, color_val } = colors[i % colors.length]; // get color name and color hex value
        
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g'); // since SVG doesn't support text inside a circle, we group them
            group.setAttribute('transform', `translate(${x}, ${y})`); // to help move balls
            group.setAttribute('tabindex', '0'); // make balls tab-able
            group.setAttribute('role', 'button'); // announce that this is a button to screen readers
            group.setAttribute('aria-label', `${colors_2[i]} ball`);

            //BALL
            const ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');  // Create the circle
            ball.setAttribute('cx', 0);
            ball.setAttribute('cy', 0);
            ball.setAttribute('r', radius.current);
            ball.setAttribute('fill', color_val);

            const size = radius.current * 0.8;

            
            //TEXT
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');    // text to visually indicate ball color with a letter
            text.setAttribute('x', 0);
            text.setAttribute('y', size/4); // adjustment to center text
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', radius.current * 0.5);
            text.setAttribute('fill', 'black');
            text.setAttribute('pointer-events', 'none');
            

            // IMAGE
            const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
            image.setAttribute("href", `/icons/scrambledScript/${word_colors[i]}.svg`);
            image.setAttribute("x", -size / 2);
            image.setAttribute("y", -size);
            image.setAttribute("width", size);
            image.setAttribute("height", size);
            
            if (roundNumber === ROUND_1 || roundNumber === ROUND_3) { 
              text.textContent = word_colors[i]; // R1 and R3 show words without dsylexia
            }
            else{
              text.textContent = dsy_colors[i]; // R3 and R4 show words with dyslexia
            }
        
            group.addEventListener('click', function () {   // click handler for the group (text + circle)
                if (color === targetColor) {
                    setPlayerScore(prev => {
                      const newScore = prev + 1;
                      playerScoreRef.current = newScore;
                      return newScore;
                    });
                    resultMessageRef.current.textContent = "Correct!";
                    resultMessageRef.current.style.color = GREEN;
                } else {
                    setComputerScore(prev => {
                      const newScore = prev + 1;
                      computerScoreRef.current = newScore;
                      return newScore;
                    });
                    setPlayerScore(prev => {
                      const newScore = prev - 1;
                      playerScoreRef.current = newScore;
                      return newScore;
                    });
                    resultMessageRef.current.textContent = "Wrong!";
                    resultMessageRef.current.style.color = RED;
                }
                resetGameRef.current();
            });
        
            // put group together (text + circle) and add to SVG
            group.appendChild(ball);
            group.appendChild(text);
            svgRef.current.appendChild(group);
            

            if (roundNumber === ROUND_3 || roundNumber === ROUND_4) {
              group.appendChild(image);
              text.setAttribute('y', size/2); // adjustment to center text
            }
        
            // store group + position, color data
            balls.push({ element: group, x, y, dx, dy, color });
        }
    }

    function moveBalls() {
        if (gameEndedRef.current) return; // balls stop moving at game end
    
        balls.forEach(ball => {
            ball.x += ball.dx;
            ball.y += ball.dy;
    
            // bounce ball off edges
            if (ball.x - radius.current <= 0 || ball.x + radius.current >= svgWidth.current) {
                ball.dx *= -1;
            }
            if (ball.y - radius.current <= 0 || ball.y + radius.current >= svgHeight.current) {
                ball.dy *= -1;
            }
    
            // move entire group (ball + text)
            ball.element.setAttribute('transform', `translate(${ball.x}, ${ball.y})`);
        });
    
        requestAnimationFrame(moveBalls);
    }

    /************** 
    GAME LOOP 
    ***************/
    resetGameRef.current = resetGame; // setting funct
    stopGameRef.current = stopGame;
    setTargetColor();
    createBalls();
    moveBalls(); // Start movement


  }, []);


  return (
    <GameShell>
      <div className="appContainer">
        <Container fluid style={{ padding: 10 }}> {/* Game title, right/wrong msg */}
          <h2>Scrambled Script - Round {roundNumber} of 4</h2>
          <p ref={resultMessageRef} id="resultMessage" aria-live="assertive"></p>
        </Container>
        
        <Container fluid>
          <Row>
            <Col className="text-end"><h3 id="playerScore">Player: {playerScore}</h3></Col>
            <Col>
              {/* Trigger game ending when time bar reaches 0! */}
              <CountdownTimer initialTime={10} onComplete={() => stopGameRef.current()}/> 
            </Col>
            <Col className="text-start"><h3 id="computerScore">Computer: {computerScore}</h3></Col>
          </Row>
        </Container>

        { /* Game msgs + canvas (SVG, announcements) */ }
        <h3 ref={targetColorTextRef} aria-live="assertive" > Click the correct color ball</h3>


        <svg ref={svgRef} className="gameCanvas" preserveAspectRatio="xMidYMid meet" role="group" aria-labelledby="canvas-title">
          <title id="canvas-title">Game canvas with moving balls</title>
        </svg>

        { /* Game key */ }
        <div ref={gameKeyRef} id="gameKey"></div>



        { /* Game over modal */ }
        <Modal ref={gameOverPopupRef} show={show} onHide={handleClose} centered>
          <Modal.Header style={{ backgroundColor: MODAL_COLOR}}>
            <Modal.Title className='w-100 text-center'><h2>{gameOverMessage}</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: MODAL_COLOR}}>
            <img src={imgRef.current} alt="Game Over Image" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: MODAL_COLOR}}>
            <Button variant='link' onClick={handleClose} style={{ color: 'black'}}>
              <FaArrowRightLong size={80}/>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </GameShell>
  );
  
}

export default ScrambledScriptGame;