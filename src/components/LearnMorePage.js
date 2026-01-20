// src/pages/LearnMorePage.js
import React from 'react';
import Footer from '../components/Footer'; 
import Header from '../components/Header';
import { Container } from "react-bootstrap";

/**
 * LearnMorePage
 * Shared layout for all "Learn More" pages in EqualGames.
 * Props:
 *  - title: main heading
 *  - subtitle: subheading
 *  - imagePath: illustration path
 *  - content: React node for game-specific content
 */
function LearnMorePage({
  title = 'Implementing Accessibility:',
  subtitle = '',
  imagePath = null,
  content = null,
}) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      {/* HERO SECTION */}
      {/* <Container className="px-3"> */}
        <header
          style={{
            position: 'relative',
            background: '#CFE1F4',
            padding: '1.8rem 1.4rem',
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => window.history.back()}
            aria-label="Go back"
            style={{
              position: 'absolute',
              top: '0.25rem',
              left: '1rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '3rem',   // smaller on mobile
              lineHeight: 1,
              color: '#273C84',
            }}
          >
            ‹
          </button>

          {/* Hero content container */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',               // ✅ allow wrapping on small screens
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              gap: '1rem',
              paddingLeft: '3rem',
            }}
          >
            {/* Text */}
            <div style={{ flex: '1 1 260px', minWidth: 0 }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(1.6rem, 5vw, 2.3rem)', // ✅ responsive font
                  fontWeight: 700,
                  color: '#273C84',
                }}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  style={{
                    margin: '0.4rem 0 0',
                    fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                    color: '#273C84',
                    fontWeight: 500,
                    fontStyle: 'italic',
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>

            {/* Illustration */}
            <div
              style={{
                flex: '0 1 260px',            // ✅ can shrink
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {imagePath ? (
                <img
                  src={imagePath}
                  alt="Learn more illustration"
                  style={{
                    width: '100%',             // ✅ image follows its container
                    maxWidth: '260px',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '165px',
                    height: '140px',
                    background: 'rgba(255,255,255,0.4)',
                    borderRadius: '12px',
                  }}
                />
              )}
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main
          style={{
            flexGrow: 1,
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '2.5rem 1.25rem 3rem',
          }}
        >
          {content}
        </main>
      {/* </Container> */}

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}

export default LearnMorePage;
