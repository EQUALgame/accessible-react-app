import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRightLong } from "react-icons/fa6";
import { Suspense, lazy } from 'react';
import GameShell from '../GameShell';

const ScoreGraph = lazy(() => import('./ScoreGraph'));

export default function ColorBlindScoreboard() {
  const navigate = useNavigate();

  // get scores from localStorage
  const scores = JSON.parse(localStorage.getItem('colorblind_scores') || '[]');

  const chartData = scores.map((entry) => ({ // map scores to chart data
    name: `Round ${entry.roundNumber}`,
    Player: entry.curr_player_score,
    Computer: entry.curr_computer_score
  }));

  return (
    <GameShell>  
      {/* Feel free to change so much UI things here to get it working! */}
      <Container fluid style={{ backgroundColor: ' #e5e9f2', minHeight: '100vh'}}>
        <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          <Row style={{padding: '20px'}}>
            <h1>Scoreboard</h1>
            <Col className="text-end">
              <div className="d-flex justify-content-end align-items-center gap-2">
                <div style={{ width: 16, height: 16, backgroundColor: '#F95F62', borderRadius: 2 }}></div>
                <h3 className="mb-0">Player</h3>
              </div>
            </Col>

            <Col className="text-start">
              <div className="d-flex justify-content-start align-items-center gap-2">
                <div style={{ width: 16, height: 16, backgroundColor: '#5B9AC8', borderRadius: 2 }}></div>
                <h3 className="mb-0">Computer</h3>
              </div>
            </Col>
          </Row>

          <Row className="w-100 px-3 mb-4">
            <Col xs={12}>
              <Suspense fallback={<div>Loading chart...</div>}>
                <ScoreGraph data={chartData} />
              </Suspense>
            </Col>
          </Row>

          <Row className='mt-5'>
            {[1, 2, 3, 4].map((round) => (
              <Col className="text-center" key={round}>
                <div><h4>Round {round}</h4></div>
                <div>Simulation {round % 2 === 0 ? '✅' : '❌'}</div>
                <div>Accessible {round >= 3 ? '✅' : '❌'}</div>
              </Col>
            ))}
          </Row>

          <Row style={{padding: '40px'}}>
            <Col className='text-end'>
              <Button variant="link" size="lg" style={{color: 'black'}} onClick={() => navigate(`/color-clash/learn-more`)}>
                <FaArrowRightLong size={30}/>
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </GameShell>
  );
}