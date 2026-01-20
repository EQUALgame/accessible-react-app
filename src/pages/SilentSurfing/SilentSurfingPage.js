import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function SilentSurfingPage() {
  return (
    <div>
      <Header />

      {/* HERO + ACTION */}
      <section className="py-5" style={{ backgroundColor: '#E3F2FD', position: 'relative' }}>
        {/* Back button - top left
        <a
          href="/"
          aria-label="Go back to home page"
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#002B5B',
            textDecoration: 'none',
          }}
        >
          &lt;
        </a> */}

        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-2">Silent Surfing</h1>
            <p className="fs-5 text-dark mb-2">
              Accessibility for Deafness{' '}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('more-about');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  textDecoration: 'underline',
                  color: '#0d6efd',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                and more
              </button>
            </p>
          </div>

          <Row className="justify-content-center g-4">

            {/* Start Game */}
            <Col md={6} className="text-center">
              <div
                style={{
                  backgroundColor: '#78A9CF',
                  borderRadius: 12,
                  padding: '20px',
                  height: '360px',        
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/silentSurfing/silentSurfingRound2.svg"}
                  alt="Silent Surfing game illustration"
                  style={{
                    maxWidth: '100%',
                    height: '280px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="mt-3 px-4 py-2 fw-semibold"
                style={{
                  fontSize: '2rem',
                  backgroundColor: '#6BA3D6',
                  border: 'none',
                  borderRadius: 20,
                  boxShadow: '0 4px 0 rgba(0,0,0,.2)'
                }}
              >
                Start Game
              </Button>
            </Col>

            {/* Implementing Accessibility */}
            <Col md={6} className="text-center">
              <div
                style={{
                  backgroundColor: '#78A9CF',
                  borderRadius: 12,
                  padding: '20px',
                  height: '360px',        
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.4rem, 4.5vw, 1.7rem)',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '10px'
                  }}
                >
                  Implementing Accessibility
                </div>

                <img
                  src={process.env.PUBLIC_URL + "/icons/learnMoreDown.svg"}
                  alt="Implementing accessibility illustration"
                  style={{
                    maxWidth: '100%',
                    height: '280px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <Button
                as={Link} to="/silent-surfing/learn-more"
                variant="primary"
                size="lg"
                className="mt-3 px-4 py-2 fw-semibold"
                style={{
                  fontSize: 'clamp(1.6rem, 4.5vw, 2rem)', 
                  backgroundColor: '#6BA3D6',
                  border: 'none',
                  borderRadius: 20,
                  boxShadow: '0 4px 0 rgba(0,0,0,.2)',
                  maxWidth: '100%',                        
                  whiteSpace: 'normal',                    
                  wordBreak: 'break-word'
                }}
              >
                Learn More
              </Button>
            </Col>

          </Row>

        </Container>
      </section>

      {/* ALWAYS VISIBLE SECTION */}
      <section id="more-about" className="py-5 border-top">
        <Container className="text-center">
          <h2 className="fw-bold display-6 text-primary mb-4">
            More About Silent Surfing
          </h2>
          <p className="fst-italic fs-5" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            This game shows what it’s like to experience technology without sound. It shows challenges faced by people who are deaf helping us create stronger visual design.
          </p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default SilentSurfingPage;
