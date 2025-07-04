import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaArrowRightLong } from "react-icons/fa6";
import round_1_img from '../../assets/round1_img.png';
import round_2_img from '../../assets/round2_img.png';
import round_3_img from '../../assets/round3_img.png';
import round_4_img from '../../assets/round4_img.png';
import round_2_bubble from '../../assets/round2_bubble.png';
import round_3_bubble from '../../assets/round3_bubble.png';
import round_4_bubble from '../../assets/round4_bubble.png';



function getCardBody(roundNumber, img1, img2, alt1, alt2) {
  if (roundNumber == 1) {
    return ( 
      <>
        <Row className="align-items-center p-4">
          <Col>
            <ul>
              <li>In this round, you will have 30 seconds to pop as many red or green balloons as possible.</li>
              <li>You will see instructions to pop either a red or green balloon displayed underneath the time bar.</li>
              <li>Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.</li>
              <li>Click the arrow to begin!</li>
            </ul>
          </Col>
          <Col>
            <Image src={img1.current} alt={alt1} fluid />
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row className="d-flex align-items-center p-4">
          <Col>
            <Image src={img1.current} alt={alt1} fluid />
          </Col>
          <Col>
            <Image src={img2.current} alt={alt2} fluid />
          </Col>
        </Row>
      </>
    );
  }
}

export default function Round({ roundNumber }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const round = roundNumber || Number(id) || 1;
  const CARD_COLOR = '#B6D5EBBF'; 
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const alt_text = "Man looking at balloons";
  const alt_text2 = "speech bubble says pop balloon"; 
  
  switch (round) { // handle image changes based on round
    case 1:
      imgRef.current = round_1_img;
      break;
    case 2:
      imgRef.current = round_2_img;
      imgRef2.current = round_2_bubble;
      break;
    case 3:
      imgRef.current = round_3_img;
      imgRef2.current = round_3_bubble;
      break;
    case 4:
      imgRef.current = round_4_img;
      imgRef2.current = round_4_bubble;
      break;
    default:
      break;
  }

  return (
    <>
    <Container fluid className="fullscreen-flex" style={{ backgroundColor: ' #e5e9f2' }}>
      <Card style={{ backgroundColor: CARD_COLOR }}>
        <Card.Header>
          <Card.Title><h2>Color+  –  Round {round}/4</h2></Card.Title>
        </Card.Header>
        { /** Had to restrict viewheight to ensure landscape worked on phones **/}
        <Card.Body style={{ maxHeight: '50vh', overflowY: 'auto' }}> 
          {getCardBody(round, imgRef, imgRef2, alt_text, alt_text2)} 
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button size="lg" variant='link' style={{ color: 'black'}} onClick={() => navigate(`/colorblindness/game/${round}`)}>
            <FaArrowRightLong />
          </Button>
        </Card.Footer>
      </Card>
    </Container>
    </>
  );
}