import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function DimmedDetailsPage() {
  return (
    <div>
      <Header />

      {/* HERO + ACTION */}
      <section className="py-5" style={{ backgroundColor: '#E3F2FD', position: 'relative' }}>

        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-2"> Dimmed Details</h1>
            <p className="fs-5 text-dark mb-2">
              Accessibility for Low Vision{' '}
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
                  src={process.env.PUBLIC_URL + "/icons/dimmedDetails/dimmedDetailsRound2.svg"}
                  alt="Dimmed Details game illustration"
                  style={{
                    maxWidth: '100%',
                    height: '280px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <Button
                as={Link} to="/dimmed-details/round-1"              
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
                as={Link} to="/dimmed-details/learn-more"
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
            Universally Designing For Low Vision 
          </h2>
          <p className="fs-5">
            Useful for those with low vision, older adults, and also enhances vision for tired eyes!
          </p>
        </Container>


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
                <th style={{ backgroundColor: "#B6D5EB99", border: "none", width: "33.33%", padding: "12px", fontWeight: "normal", fontStyle: "italic", fontSize: "20px" }}>
                  Permanent
                </th>

                <th style={{ backgroundColor: "#B6D5EB99", border: "none", width: "33.33%", padding: "12px", fontWeight: "normal", fontStyle: "italic", fontSize: "20px" }}>
                  Temporary
                </th>

                <th style={{ backgroundColor: "#B6D5EB99", border: "none", width: "33.33%", padding: "12px", fontWeight: "normal", fontStyle: "italic", fontSize: "20px" }}>
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
                    <li>Low Vision</li>
                    <li>Glaucoma</li>
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
                    <li>Eye Surgery</li>
                    <li>Dilated Eyes</li>
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
                    <li>Environmental light conditions (sun, fog)</li>
                    <li>Using screen when walking</li>
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

export default DimmedDetailsPage;
