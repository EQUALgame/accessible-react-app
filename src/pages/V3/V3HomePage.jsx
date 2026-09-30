import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Navbar, Row } from 'react-bootstrap';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import ColorClashIcon from '../../components/icons/ColorClashIcon.jsx';
import SilentSurfingIcon from '../../components/icons/SilentSurfingIcon.jsx';
import DimmedDetailsIcon from '../../components/icons/DimmedDetailsIcons.jsx';
import Footer from '../../components/Footer';
import ColorClashPage from '../ColorClash/ColorClashPage';
import ColorClashRound1InstructionPage from '../ColorClash/ColorClashRound1InstructionPage';
import ColorClashRound2InstructionPage from '../ColorClash/ColorClashRound2InstructionPage';
import ColorClashRound3InstructionPage from '../ColorClash/ColorClashRound3InstructionPage';
import ColorClashRound4InstructionPage from '../ColorClash/ColorClashRound4InstructionPage';
import ColorClashLearnPage from '../learn_more/ColorClashLearnPage';
import ColorClashGame from '../../games/colorclash/Game';
import ColorClashScores from '../../games/colorclash/Scores';
import SilentSurfingPage from '../SilentSurfing/SilentSurfingPage';
import SilentSurfingRound1InstructionPage from '../SilentSurfing/SilentSurfingRound1InstructionPage';
import SilentSurfingRound2InstructionPage from '../SilentSurfing/SilentSurfingRound2InstructionPage';
import SilentSurfingRound3InstructionPage from '../SilentSurfing/SilentSurfingRound3InstructionPage';
import SilentSurfingRound4InstructionPage from '../SilentSurfing/SilentSurfingRound4InstructionPage';
import SilentSurfingLearnPage from '../learn_more/SilentSurfingLearnPage';
import DimmedDetailsPage from '../DimmedDetails/DimmedDetailsPage';
import DimmedDetailsRound1InstructionPage from '../DimmedDetails/DimmedDetailsRound1InstructionPage';
import DimmedDetailsRound2InstructionPage from '../DimmedDetails/DimmedDetailsRound2InstructionPage';
import DimmedDetailsRound3InstructionPage from '../DimmedDetails/DimmedDetailsRound3InstructionPage';
import DimmedDetailsRound4InstructionPage from '../DimmedDetails/DimmedDetailsRound4InstructionPage';
import DimmedDetailsLearnPage from '../learn_more/DimmedDetailsLearnPage';

const PRE_TEST_FORM_URL = 'https://forms.gle/36vtfg9MuyLDKh9G8';

const V3_GAMES = [
  {
    title: 'Color Clash',
    description: 'Accessibility for Color Blindness and more',
    route: '/color-clash',
    Icon: ColorClashIcon,
  },
  {
    title: 'Silent Surfing',
    description: 'Accessibility for Deafness and more',
    route: '/silent-surfing',
    Icon: SilentSurfingIcon,
  },
  {
    title: 'Dimmed Details',
    description: 'Accessibility for Low Vision and more',
    route: '/dimmed-details',
    Icon: DimmedDetailsIcon,
  },
];

function V3Experience() {
  const [stage, setStage] = useState('landing');
  const stageHeadingRef = useRef(null);

  useEffect(() => {
    if (stage !== 'landing') {
      stageHeadingRef.current?.focus();
    }
  }, [stage]);

  return (
    <div>
      <Navbar bg="white" variant="light" className="py-3 border-bottom">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center"
            style={{ textDecoration: 'none' }}
          >
            <img
              src={process.env.PUBLIC_URL + '/icons/logo-full.png'}
              alt="Project Logo"
              className="img-fluid"
              style={{ height: '60px', maxWidth: '100%', objectFit: 'contain' }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <section className="py-4" style={{ backgroundColor: '#E3F2FD' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <p className="fw-bold text-dark mb-2" style={{ fontSize: '2rem' }}>
                Enhancing QUality
              </p>
              <h1
                className="fw-bold text-primary mb-0"
                style={{
                  fontSize: '3.2rem',
                  lineHeight: '1.2',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                }}
              >
                Accessibility <br />
                Learning Games
              </h1>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src={process.env.PUBLIC_URL + '/icons/Game image.svg'}
                alt="Game Hero Graphic"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto', maxHeight: '360px' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <main className="py-5">
        <Container>
          {stage === 'landing' && (
            <section className="text-center" aria-label="V3 welcome">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5 py-3"
                style={{ minHeight: '48px', maxWidth: '100%', whiteSpace: 'normal' }}
                onClick={() => setStage('pretest')}
              >
                <b>Let's Begin </b>😊
              </button>
            </section>
          )}

          {stage === 'pretest' && (
            <section aria-labelledby="v3-pretest-heading">
              <h2
                id="v3-pretest-heading"
                ref={stageHeadingRef}
                tabIndex="-1"
                className="fw-bold text-primary mb-4"
              >
                Pre-test
              </h2>
              <div className="w-100 mb-4" style={{ overflow: 'hidden' }}>
                <iframe
                  src={PRE_TEST_FORM_URL}
                  title="Student pre-test Google Form"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'min(75vh, 900px)',
                    minHeight: '600px',
                    border: 0,
                  }}
                />
              </div>
              <p id="v3-pretest-instruction" className="mb-3">
                Please complete the pre-test above. Once you have submitted it, click Proceed.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg px-5 py-3"
                style={{ minHeight: '48px', maxWidth: '100%', whiteSpace: 'normal' }}
                aria-describedby="v3-pretest-instruction"
                onClick={() => setStage('games')}
              >
                Proceed
              </button>
            </section>
          )}

          {stage === 'games' && (
            <section aria-labelledby="v3-games-heading">
              <h2
                id="v3-games-heading"
                ref={stageHeadingRef}
                tabIndex="-1"
                className="fw-bold text-primary mb-4"
              >
                Choose a game
              </h2>
              <Row className="g-4 justify-content-center">
                {V3_GAMES.map(({ title, description, route, Icon }) => (
                  <Col key={title} lg={4} md={6}>
                    <Card
                      as={Link}
                      to={route}
                      className="game-card h-100 shadow-sm border-0 text-decoration-none"
                    >
                      <Card.Body className="p-3 d-flex align-items-center">
                        <div className="card-icon me-3">
                          <Icon height={100} />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="h5 fw-bold mb-1">{title}</h3>
                          <small className="text-muted">{description}</small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
}

function V3HomePage() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<V3Experience />} />
        <Route path="/color-clash" element={<ColorClashPage />} />
        <Route path="/color-clash/round-1" element={<ColorClashRound1InstructionPage />} />
        <Route path="/color-clash/round-2" element={<ColorClashRound2InstructionPage />} />
        <Route path="/color-clash/round-3" element={<ColorClashRound3InstructionPage />} />
        <Route path="/color-clash/round-4" element={<ColorClashRound4InstructionPage />} />
        <Route path="/color-clash/learn-more" element={<ColorClashLearnPage />} />
        <Route path="/color-clash-play/game/:round" element={<ColorClashGame />} />
        <Route path="/color-clash-play/recap" element={<ColorClashScores />} />
        <Route path="/silent-surfing" element={<SilentSurfingPage />} />
        <Route path="/silent-surfing/round-1" element={<SilentSurfingRound1InstructionPage />} />
        <Route path="/silent-surfing/round-2" element={<SilentSurfingRound2InstructionPage />} />
        <Route path="/silent-surfing/round-3" element={<SilentSurfingRound3InstructionPage />} />
        <Route path="/silent-surfing/round-4" element={<SilentSurfingRound4InstructionPage />} />
        <Route path="/silent-surfing/learn-more" element={<SilentSurfingLearnPage />} />
        <Route path="/dimmed-details" element={<DimmedDetailsPage />} />
        <Route path="/dimmed-details/round-1" element={<DimmedDetailsRound1InstructionPage />} />
        <Route path="/dimmed-details/round-2" element={<DimmedDetailsRound2InstructionPage />} />
        <Route path="/dimmed-details/round-3" element={<DimmedDetailsRound3InstructionPage />} />
        <Route path="/dimmed-details/round-4" element={<DimmedDetailsRound4InstructionPage />} />
        <Route path="/dimmed-details/learn-more" element={<DimmedDetailsLearnPage />} />
      </Routes>
    </HashRouter>
  );
}

export default V3HomePage;