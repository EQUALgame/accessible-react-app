import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import { motion } from "framer-motion";
import ScrambledScriptIcon from "../components/icons/ScrambledScriptIcon.jsx";
import TapTroubleIcon from "../components/icons/TapTroubleIcon";
import DimmedDetailsIcon from '../components/icons/DimmedDetailsIcons.jsx';
import ColorClashIcon from '../components/icons/ColorClashIcon.jsx';
import SightlessSearchIcon from '../components/icons/SightlessSearchIcon.jsx';
import SilentSurfingIcon from '../components/icons/SilentSurfingIcon.jsx';
import HesitantHoverIcon from '../components/icons/HesitantHoverIcon.jsx';
import FracturedFocusIcon from '../components/icons/FracturedFocusIcon.jsx';
import { Link } from 'react-router-dom';


/**
 * HomePage Component
 * Displays the main landing page with game cards and hero section
 */
function HomePage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="py-4" style={{ backgroundColor: '#E3F2FD' }}>
    <Container>
      <Row className="align-items-center">
        {/* Left Side: Title + Subtitle */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <div>
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
          </div>
        </Col>

        {/* Right Side: Image */}
        <Col lg={6} className="text-center">
          <img
            src= {process.env.PUBLIC_URL + "/icons/Game image.svg"}
            alt="Game Hero Graphic"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '360px',
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>

      {/* Games Grid Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4 justify-content-center">
            {/* Color Clash */}
            <Col lg={4} md={6}>
              <Card
                as={Link}
                to="/color-clash"
                className="game-card h-100 shadow-sm border-0 text-decoration-none"
              >
                <Card.Body className="p-3 d-flex align-items-center">
                  <div className="card-icon me-3">
                    <ColorClashIcon height={100} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">Color Clash</h5>
                    <small className="text-muted">Accessibility for Color Blindness and more</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Dimmed Details */}
            <Col lg={4} md={6}>
              <Card
                as={Link}
                to="/dimmed-details"
                className="game-card h-100 shadow-sm border-0 text-decoration-none"
              >
                <Card.Body className="p-3 d-flex align-items-center">
                  <div className="card-icon me-3">
                    <DimmedDetailsIcon height={100} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">Dimmed Details</h5>
                    <small className="text-muted">Accessibility for Low Vision and more</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Sightless Search */}
            <Col lg={4} md={6}>
              <Card
                as={Link}
                to="/sightless-search"
                className="game-card h-100 shadow-sm border-0 text-decoration-none"
              >
                <Card.Body className="p-3 d-flex align-items-center">
                  <div className="card-icon me-3">
                    <SightlessSearchIcon height={100} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">Sightless Search</h5>
                    <small className="text-muted">Accessibility for Blindness and more</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          

            {/* Silent Surfing */}
            <Col lg={4} md={6}>
              <Card
                as={Link}
                to="/silent-surfing"
                className="game-card h-100 shadow-sm border-0 text-decoration-none"
              >
                <Card.Body className="p-3 d-flex align-items-center">
                  <div className="card-icon me-3">
                    <SilentSurfingIcon height={100} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">Silent Surfing</h5>
                    <small className="text-muted">Accessibility for Deafness and more</small>
                  </div>
                </Card.Body>
              
              </Card>
            </Col>

            {/* Touch Screen */}
            <Col lg={4} md={6}>
              <motion.div initial="rest" whileHover="hover" whileFocus="hover">
                  <Card className="game-card h-100 shadow-sm border-0">
                    <Card.Body className="p-3 d-flex align-items-center">
                      <div className="card-icon me-3">
                        <TapTroubleIcon height={120} />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1">Tap Trouble</h5>
                        <small className="text-muted">Accessibility for Limited Dexterity and more</small>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
            </Col>
            

            {/* Hesitant Hover */}
            <Col lg={4} md={6}>
              <Card
                as={Link}
                to="/hesitant-hover"
                className="game-card h-100 shadow-sm border-0 text-decoration-none"
              >
                <Card.Body className="p-3 d-flex align-items-center">
                  <div className="card-icon me-3">
                    <HesitantHoverIcon height={100} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">Hesitant Hover</h5>
                    <small className="text-muted">Accessibility for Limited Dexterity and more (keyboard + mouse needed)</small>
                  </div>
                </Card.Body>
                
              </Card>
            </Col>
            
          

            {/* Scrambled Script */}
            <Col lg={4} md={6}>
              <motion.div initial="rest" whileHover="hover" whileFocus="hover">
                <Card 
                  as={Link}
                  to="/scrambled-script"
                  className="game-card h-100 shadow-sm border-0 text-decoration-none"
                >
                  <Card.Body className="p-3 d-flex align-items-center">
                    <div className="card-icon me-3">
                      <ScrambledScriptIcon height={120} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">Scrambled Script</h5>
                      <small className="text-muted">Accessibility for Dyslexia and more</small>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          

            {/* ADHD */}
            <Col lg={4} md={6}>
              <Card
                className="game-card h-100 shadow-sm border-0"
              >
                <Card.Body className="p-3 d-flex align-items-center">
                  <div className="card-icon me-3">
                    <FracturedFocusIcon height={100} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">Fractured Focus</h5>
                    <small className="text-muted">Accessibility for ADHD and more</small>
                  </div>
                </Card.Body>
                
              </Card>
            </Col>
            

            
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;