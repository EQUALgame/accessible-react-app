import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


function ColorClashPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);
  const youtubeSrc = `https://www.youtube.com/embed/aHC02QpJJVY?enablejsapi=1`;

  const handleVideoToggle = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    if (isPlaying) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*'
      );
    } else {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*'
      );
    }
    setIsPlaying(prev => !prev);
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />

      {/* HERO + ACTION */}
      <section className="py-5" style={{ backgroundColor: '#E4D8FF', position: 'relative' }}>

        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-2">Color Clash</h1>
            <p className="fs-5 text-dark mb-2">
              Accessibility for Color Blindness{' '}
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

            {/* Implementing Accessibility */}
            <Col md={6} className="text-center">
              <div
                style={{
                  backgroundColor: '#BFA1FFBF',
                  borderColor: '#AE8EF2',
                  borderStyle: 'solid',
                  borderWidth: '2px',
                  borderRadius: 12,
                  padding: '20px',
                  height: '360px',        
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}
              >
                <iframe
                  ref={iframeRef}
                  src={youtubeSrc}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title="Color Clash introduction video"
                  width="100%"
                  height="330px"
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={handleVideoToggle}
                className="mt-3 px-4 py-2 fw-semibold"
                style={{
                  fontSize: 'clamp(1.6rem, 4.5vw, 2rem)',
                  backgroundColor: '#AC8FE7',
                  border: 'none',
                  borderRadius: 20,
                  boxShadow: '0 4px 0 rgba(0,0,0,.2)',
                  maxWidth: '100%',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word'
                }}
              >
                {isPlaying ? 'Pause Video' : 'Play Video'}
              </Button>
            </Col>
            {/* Start Game */}
            <Col md={6} className="text-center">
              <div
                style={{
                  backgroundColor: '#BFA1FFBF',
                  borderColor: '#AE8EF2',
                  borderStyle: 'solid',
                  borderWidth: '2px',
                  borderRadius: 12,
                  padding: '20px',
                  height: '360px',        
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/colorClash/colorClashRound2.svg"}
                  alt="Color Clash game illustration"
                  style={{
                    maxWidth: '100%',
                    height: '280px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              <Button
                as={Link} to="/color-clash/round-1"
                onClick={() => sessionStorage.setItem('gameTheme', 'k8')}
                size="lg"
                className="mt-3 px-4 py-2 fw-semibold"
                style={{
                  fontSize: 'clamp(1.6rem, 4.5vw, 2rem)', // ✅ scales down on mobile
                  backgroundColor: '#AC8FE7',
                  border: 'none',
                  borderRadius: 20,
                  boxShadow: '0 4px 0 rgba(0,0,0,.2)',
                  maxWidth: '100%',                        // ✅ never exceed column
                  whiteSpace: 'normal',                    // ✅ allow wrap if needed
                  wordBreak: 'break-word'
                }}
              >
                Start Game
              </Button>
            </Col>

          </Row>

        </Container>
      </section>

      {/* TABLE + DEFINITIONS */}
      <section id="more-about" className="py-5 border-top">
        <Container className="text-center" style={{ maxWidth: '800px' }}>
          <h2 className="fw-bold display-6 mb-4" style={{color: '#774FCA'}}>
            Universally Designing With Color 
          </h2>
          <p className="fs-5">
             Useful for people with color blindness, sensitive eyes, visual processing disorders, and also helps improve vision in low-light conditions!
          </p>
        </Container>

        {/* TABLE + DEFINITIONS */}
        <Container className="text-center">
          <table
            className=" text-center"
            style={{
              width: "60%",
              margin: "0 auto",
              borderCollapse: "separate",
              borderSpacing: "12px"
            }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#E4D8FF", border: "none", width: "33.33%", padding: "12px", fontWeight: "normal", fontStyle: "italic", fontSize: "20px" }}>
                  Permanent
                </th>

                <th style={{ backgroundColor: "#E4D8FF", border: "none", width: "33.33%", padding: "12px", fontWeight: "normal", fontStyle: "italic", fontSize: "20px" }}>
                  Temporary
                </th>

                <th style={{ backgroundColor: "#E4D8FF", border: "none", width: "33.33%", padding: "12px", fontWeight: "normal", fontStyle: "italic", fontSize: "20px" }}>
                  Situational
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "12px",
                    verticalAlign: "top",
                    width: "33.33%"
                  }}
                >
                  <ul className="text-start mb-0">
                    <li>Color blindness</li>
                    <li>Low vision </li>
                  </ul>
                </td>

                <td
                  style={{
                    border: "1px solid black",
                    padding: "12px",
                    verticalAlign: "top",
                    width: "33.33%"
                  }}
                >
                  <ul className="text-start mb-0">
                    <li>Cataract (blurry vision)</li>
                    <li>Eye infections</li>
                  </ul>
                </td>

                <td
                  style={{
                    border: "1px solid black",
                    padding: "12px",
                    verticalAlign: "top",
                    width: "33.33%"
                  }}
                >
                  <ul className="text-start mb-0">
                    <li>Low light conditions</li>
                    <li>Driving at night</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>


        <Container className='text-start' style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="fs-5 fw-bold" style={{  color: '#272A79' }}>
            Types of disabilities:         
          </p>
          <p>
            <strong>Permanent:</strong> A disability that diminishes an individual’s ability to perform tasks at the same capacity that the individual was able to before their condition.
          </p>
          <p>
            <strong>Temporary:</strong> A condition that prevents an individual from performing their activities for a limited period
          </p>
          <p>
            <strong>Situational:</strong> A temporary limitation in a person’s ability to interact with their environment or technology, caused by a momentary circumstance.
          </p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default ColorClashPage;
