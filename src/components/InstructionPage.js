import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * InstructionPage Component
 * Reusable component for all game instruction pages
 * Handles the common structure and accepts game-specific content as props
 * 
 * @param {string} title - The title of the instruction page (e.g., "Color+ - Round 1/4")
 * @param {Array} instructions - Array of instruction text strings
 * @param {string} imagePath - Path to the preview image (e.g., "/images/colorclash-round1.png")
 * @param {function} onStartGame - Function to call when arrow button is clicked
 */
function InstructionPage({ 
  title, 
  instructions = [], 
  imagePath = null, 
  onStartGame = () => {} 
}) {
  return (
    <div style={{backgroundColor: '#E3F2FD', minHeight: '100vh'}}>
      
      {/* Main Content Section - Centered with Flexbox */}
      <section 
        className="d-flex align-items-center justify-content-center" 
        style={{
          backgroundColor: '#E3F2FD',
          minHeight: '85vh',
          paddingTop: '1rem',
          paddingBottom: '1rem'
        }}
      >
        <Container fluid className="px-4">
          <div className="row justify-content-center">
            <div className="col-11 col-lg-10">
              
              {/* Instruction Card - Darker blue background */}
              <div 
                className="rounded p-5 shadow position-relative"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#c1e1f7ff' // Darker blue as shown in screenshot
                }}
              >

                {/* Sound Icon */}
                {/* <div 
                    className="position-absolute text-dark" 
                    style={{fontSize: '40px', top: '0', right: '0'}}
                  >
                    🔊
                  </div> */}
                
                {/* Title - Centered */}
                <div className="text-center mb-5 position-relative">
                  <h1 className="fw-bold text-dark mb-0">
                    {title}
                  </h1>
                  
                </div>

                {/* Main Content Row */}
                <div className="row">
                  
                  {/* Left Side - Instructions */}
                  <div className="col-lg-6">
                    <div className="pe-lg-4">
                      
                      {/* Instructions List */}
                      <div className="mb-4">
                        <ul className="text-dark" style={{fontSize: '1.15rem', lineHeight: '2'}}>
                          {instructions.map((instruction, index) => (
                            <li key={index} className="mb-3">
                              {instruction}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Right Side - Game Preview */}
                  <div className="col-lg-6">
                    <div className="position-relative">
                      
                      {/* Game Preview Area - For PNG images */}
                      <div 
                        className="rounded position-relative d-flex align-items-center justify-content-center"
                        style={{
                          height: '350px', 
                          borderRadius: '15px',
                          backgroundColor: 'transparent', // Light blue background for image area
                          overflow: 'hidden'
                        }}
                      >
                        {imagePath ? (
                          <img 
                            src={imagePath} 
                            alt="Game preview" 
                            className="w-100 h-100"
                            style={{
                              objectFit: 'contain', // Keeps image proportions
                              borderRadius: '15px'
                            }}
                          />
                        ) : (
                          <div className="text-muted" style={{fontSize: '14px', opacity: 0.7}}>
                            Game Preview Image
                          </div>
                        )}
                      </div>

                      {/* Arrow Button - Positioned outside the preview area */}
                      <div className="text-end mt-3">
                        <Button
                          variant="transparent"
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px', 
                            height: '60px', 
                            border: 'none',
                            marginLeft: 'auto'
                          }}
                          onClick={onStartGame}
                        >
                          <span style={{fontSize: '80px', fontWeight: 'bold'}}>&#8594;</span>
                        </Button>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default InstructionPage;