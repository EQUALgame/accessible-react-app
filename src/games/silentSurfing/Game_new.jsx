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

import green_sound from '../../assets/audio/green.mp3';
import red_sound from '../../assets/audio/red.mp3';
import yellow_sound from '../../assets/audio/yellow.mp3';


const AuditoryGame = () => {
  const { round } = useParams();
  const roundNumber = Number(round) || 1;
  const navigate = useNavigate();

  const stopGameRef = useRef(() => {});
  const resetGameRef = useRef(() => {});
  const gameEndedRef = useRef(false);
  const svgWidth = useRef(0);
  const svgHeight = useRef(0);
  const radius = useRef(0);
  const imgRef = useRef(null);

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playerScoreRef = useRef(0);
  const computerScoreRef = useRef(0);

  const MODAL_COLOR = '#B6D5EBBF';

  const colorAudioMap = {
    red: red_sound,
    green: green_sound,
    yellow: yellow_sound,
  };

  const svgRef = useRef(null);
  const gameKeyRef = useRef(null);
  const targetColorTextRef = useRef(null);
  const resultMessageRef = useRef(null);
  const gameOverPopupRef = useRef(null);

  const [gameOverMessage, setGameOverMessage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {   // resizeObserver to update SVG dimensions for screen orientation changes
    const observer = new ResizeObserver(() => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      svgWidth.current = rect.width;
      svgHeight.current = rect.height;
      radius.current = svgHeight.current * 0.10;
      resetGameRef.current();
    });

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) observer.unobserve(svgRef.current);
    };
  }, []);


  useEffect(() => {   // logistics when game ends: SWITCH ROUNDS + LOG SCORES
    if (!show && gameEndedRef.current) {
      const curr_player_score = playerScoreRef.current || 0;
      const curr_computer_score = computerScoreRef.current || 0;
      const ROUND_4 = 4;

      const prevScores = JSON.parse(localStorage.getItem('silent_surfing_scores') || '[]');
      const filteredScores = prevScores.filter(score => score.roundNumber !== roundNumber);
      const updatedScores = [...filteredScores, { roundNumber, curr_player_score, curr_computer_score }];
      updatedScores.sort((a, b) => a.roundNumber - b.roundNumber);
      localStorage.setItem('silent_surfing_scores', JSON.stringify(updatedScores));

      if (roundNumber < ROUND_4) {
        navigate(`/silent-surfing/round-${roundNumber + 1}`);
      } else {
        navigate(`/silent-surfing-play/recap/`);
      }
    }
  }, [show, roundNumber, navigate]);


  useEffect(() => {   // run game's mechanics
    if (!svgRef.current) return;

    const RED = 'red'; const GREEN = 'green'; const YELLOW = 'yellow';
    const colors_2 = [RED, GREEN, YELLOW];
    const numBalls = 9;
    const velocity = 1;

    svgWidth.current = svgRef.current.getBoundingClientRect().width;
    svgHeight.current = svgRef.current.getBoundingClientRect().height;
    radius.current = svgHeight.current * 0.10;
    gameEndedRef.current = false;

    let balls = [];
    let targetColor = '';
    let winMessage = "WINNER IS PLAYER!";
    let tieMessage = "IT'S A TIE!";
    let loseMessage = "WINNER IS COMPUTER!";

    let colors = [
      { color: RED, color_val: '#F95F62' },
      { color: GREEN, color_val: '#77D353' },
      { color: YELLOW, color_val: '#FFC82C' },
    ];

    /**************
    GAME MECHANICS
    ***************/
    function stopGame() {
      if (gameEndedRef.current) return;
      gameEndedRef.current = true;

      let didWin = playerScoreRef.current > computerScoreRef.current;
      let didTie = playerScoreRef.current === computerScoreRef.current;

      if (didTie) setGameOverMessage(tieMessage);
      else setGameOverMessage(didWin ? winMessage : loseMessage);

      if (didWin) imgRef.current = manImage;
      else if (didTie) imgRef.current = tieImage;
      else imgRef.current = robotImage;

      handleShow();

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
    }

    function setTargetColor() {
      targetColor = colors_2[Math.floor(Math.random() * colors_2.length)];

      // Show text label only in rounds 3 and 4
      if (roundNumber === 3 || roundNumber === 4) {
        targetColorTextRef.current.textContent = `Pop ${targetColor}!`;
      } else {
        targetColorTextRef.current.textContent = "";
      }

      // Play audio cue only in rounds 1 and 3
      if (roundNumber === 1 || roundNumber === 3) {
        const audioFile = colorAudioMap[targetColor];
        if (audioFile) {
          const audio = new Audio(audioFile);
          audio.play().catch(err => console.error("Audio play error:", err));
        }
      }
    }

    /**************
    BALL FUNCTIONS
    ***************/
    function getRandomPosition() {
      return {
        x: Math.random() * (svgWidth.current - 2 * radius.current) + radius.current,
        y: Math.random() * (svgHeight.current - 2 * radius.current) + radius.current,
        dx: velocity * (Math.random() < 0.5 ? 1 : -1),
        dy: velocity * (Math.random() < 0.5 ? 1 : -1),
      };
    }

    function createBalls() {
      balls = [];
      svgRef.current.innerHTML = '';

      for (let i = 0; i < numBalls; i++) {
        const { x, y, dx, dy } = getRandomPosition();
        const { color, color_val } = colors[i % colors.length];

        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('transform', `translate(${x}, ${y})`);
        group.setAttribute('tabindex', '0');
        group.setAttribute('role', 'button');

        const ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ball.setAttribute('cx', 0);
        ball.setAttribute('cy', 0);
        ball.setAttribute('r', radius.current);
        ball.setAttribute('fill', color_val);

        group.setAttribute('aria-label', `${color} ball`);

        group.addEventListener('click', function () {
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

        group.appendChild(ball);
        svgRef.current.appendChild(group);

        balls.push({ element: group, x, y, dx, dy, color });
      }
    }

    function moveBalls() {
      if (gameEndedRef.current) return;

      balls.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - radius.current <= 0 || ball.x + radius.current >= svgWidth.current) ball.dx *= -1;
        if (ball.y - radius.current <= 0 || ball.y + radius.current >= svgHeight.current) ball.dy *= -1;

        ball.element.setAttribute('transform', `translate(${ball.x}, ${ball.y})`);
      });

      requestAnimationFrame(moveBalls);
    }

    /**************
    GAME LOOP
    ***************/
    resetGameRef.current = resetGame;
    stopGameRef.current = stopGame;

    setTargetColor();
    createBalls();
    moveBalls();

  }, []);


  return (
    <GameShell>
      <div className="appContainer">
        <Container fluid style={{ padding: 10 }}>
          <h2>Auditory – Round {roundNumber} of 4</h2>
          <p ref={resultMessageRef} id="resultMessage" aria-live="assertive"></p>
        </Container>

        <Container fluid>
          <Row>
            <Col className="text-end"><h3 id="playerScore">Player: {playerScore}</h3></Col>
            <Col>
              <CountdownTimer initialTime={10} onComplete={() => stopGameRef.current()} />
            </Col>
            <Col className="text-start"><h3 id="computerScore">Computer: {computerScore}</h3></Col>
          </Row>
        </Container>

        <h3 ref={targetColorTextRef} aria-live="assertive">Click the correct color ball</h3>

        <svg ref={svgRef} className="gameCanvas" preserveAspectRatio="xMidYMid meet" role="group" aria-labelledby="canvas-title">
          <title id="canvas-title">Game canvas with moving balls</title>
        </svg>

        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'black',
          lineHeight: '1.3',
        }}>
          <div>CONTROL KEY:</div>
          <div>Left Mouse Button = Pop balls</div>
        </div>

        <div ref={gameKeyRef} id="gameKey"></div>

        <Modal ref={gameOverPopupRef} show={show} onHide={handleClose} centered>
          <Modal.Header style={{ backgroundColor: MODAL_COLOR }} closeButton>
            <Modal.Title className='w-100 text-center'><h2>{gameOverMessage}</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: MODAL_COLOR }}>
            <img src={imgRef.current} alt="Game Over Image" className="img-fluid" />
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: MODAL_COLOR }}>
            <Button variant='link' onClick={handleClose} style={{ color: 'black' }}>
              <FaArrowRightLong size={30} />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </GameShell>
  );
};

export default AuditoryGame;
