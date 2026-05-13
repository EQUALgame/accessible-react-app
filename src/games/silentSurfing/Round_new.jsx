import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaArrowRightLong } from "react-icons/fa6";
import GameShell from '../GameShell';

import round_1_img from '../../assets/silentSurfing/round1_img.png';


const roundInstructions = {
  1: [
    "In this round, you will have 30 seconds to pop as many red, green, or yellow balls as possible.",
    "You will hear instructions to pop either a red, green, or yellow ball.",
    "Popping the correct color increases your score, while popping the wrong one decreases your score and increases the computer's.",
    "Make sure your computer volume is at least 50%.",
    "Click the arrow to begin!"
  ],
  2: [
    "In this round, you will play just as you did last round, except you will be unable to hear the audio to simulate an audio impairment.",
    "You still need to pop the correct color: red, green, or yellow.",
    "Click the arrow to begin!"
  ],
  3: [
    "This round combines text and audio again.",
    "The audio will be enabled and a line of text underneath the time bar will indicate which color to pop (red, green, or yellow).",
    "Scoring works the same: correct = +1 for you, wrong = -1 for you and +1 for the computer.",
    "Make sure your computer volume is at least 50%.",
    "Click the arrow to begin!"
  ],
  4: [
    "This final round simulates an auditory impairment scenario with assistance from the line of text underneath the time bar.",
    "You will need to pop the correct color: red, green, or yellow.",
    "Click the arrow to begin!"
  ],
};


function getCardBody(round, imgRef, alt) {
  const instructions = roundInstructions[round] || roundInstructions[1];

  if (round === 1) {
    return (
      <Row className="align-items-center p-4">
        <Col>
          <ul>
            {instructions.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <Image src={imgRef.current} alt={alt} fluid />
        </Col>
      </Row>
    );
  }

  return (
    <Row className="justify-content-center p-4">
      <Col xs={12} md={8}>
        <ul>
          {instructions.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}


export default function Round({ roundNumber }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const round = roundNumber || Number(id) || 1;
  const CARD_COLOR = '#B6D5EBBF';
  const imgRef = { current: round_1_img };
  const alt_text = "Person listening with headphones";

  return (
    <GameShell>
      <Container fluid className="fullscreen-flex" style={{ backgroundColor: '#e5e9f2' }}>
        <Card style={{ backgroundColor: CARD_COLOR }}>
          <Card.Header>
            <Card.Title><h2>Auditory – Round {round}/4</h2></Card.Title>
          </Card.Header>
          <Card.Body style={{ maxHeight: '50vh', overflowY: 'auto' }}>
            {getCardBody(round, imgRef, alt_text)}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button
              size="lg"
              variant='link'
              style={{ color: 'black' }}
              onClick={() => navigate(`/silent-surfing-play/game/${round}`)}
            >
              <FaArrowRightLong />
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </GameShell>
  );
}
