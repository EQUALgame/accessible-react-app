import React, { useState, useRef } from 'react';
import LearnMorePage from '../../components/LearnMorePage';
import './LearnMore.css';

const MODES = [
  { id: 'Difficultly with mouse', name: 'Difficultly with mouse', img: process.env.PUBLIC_URL + '/icons/sightlessSearch/Difficultly with mouse.png' },
  { id: 'Difficulty with Visual Cues', name: 'Difficulty with Visual Cues', img: process.env.PUBLIC_URL + '/icons/sightlessSearch/Difficulty with Visual Cues.png' },
  { id: 'Inaccessible Visual Media', name: 'Inaccessible Visual Media', img: process.env.PUBLIC_URL + '/icons/sightlessSearch/Inaccessible Visual Media.png' },
];

function SightlessSearchLearn() {
  const [activeIndex, setActiveIndex] = useState(0); 

  const total = MODES.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;
  const [openId, setOpenId] = useState(null);
  const [offset, setOffset] = useState(-1);   // 0(prev) / -1(curr) / -2(next)
  const [animating, setAnimating] = useState(false);
  const [animDir, setAnimDir] = useState(null);


  const content = (
    <div>
      
      {/* carousel */}
      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 5vw, 2.2rem)', 
            color: '#243563',
            fontWeight: 800,
            marginBottom: '1.6rem',
            textShadow: '0 1px 1px rgba(0,0,0,0.2)',
          }}
        >
          Blindness at a Glance 
        </h2>

        {(() => {
          const total = MODES.length;
          const isFirst = activeIndex === 0;
          const isLast = activeIndex === total - 1;

          const prev = !isFirst ? MODES[activeIndex - 1] : null;
          const curr = MODES[activeIndex];
          const next = !isLast ? MODES[activeIndex + 1] : null;

          const wheelStyle = { width: 160, height: 160, objectFit: 'contain', maxWidth: '100%' };

          const Slot = ({ item, dim }) => (
            <div style={{ textAlign: 'center', opacity: dim ? 0.3 : 1 }}>
              {item ? (
                <>
                  <img src={item.img} alt={item.name} style={wheelStyle} />
                  <p
                    style={{
                      marginTop: 12,
                      fontWeight: dim ? 500 : 700,
                      color: dim ? '#B8BFCC' : '#000',
                      fontSize: dim ? '1.1rem' : '1.25rem',
                    }}
                  >
                    {item.name}
                  </p>
                </>
              ) : (
                <div style={{ width: wheelStyle.width, height: wheelStyle.height }} />
              )}
            </div>
          );

          const Btn = ({ disabled, onClick, dir }) => {
            const bg = disabled ? '#EAF2FA' : '#4D86B4';
            const shadow = disabled ? '0 3px 4px rgba(0,0,0,0.08)' : '0 3px 5px rgba(0,0,0,0.18)';
            const arrowFill = disabled ? '#B6C7D6' : '#FFFFFF';

            return (
              <button
                type="button"
                disabled={disabled}
                onClick={onClick}
                aria-label={dir === 'left' ? 'Previous mode' : 'Next mode'}
                style={{
                  width: 80,               
                  height: 56,
                  borderRadius: 28,        
                  border: 'none',
                  background: bg,
                  boxShadow: shadow,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  transition: 'transform .15s ease',
                }}
                onMouseOver={(e) => !disabled && (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {dir === 'left' ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M14.5 5L8.5 11L14.5 17"
                      fill="none"
                      stroke={arrowFill}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9.5 5L15.5 11L9.5 17"
                      fill="none"
                      stroke={arrowFill}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          };

          return (
            <>
              <div className="cb-carousel">
                <div className="slot--dim">
                  <Slot item={prev} dim />
                </div>

                <div className="slot--curr">
                  <Slot item={curr} />
                </div>

                <div className="slot--dim">
                  <Slot item={next} dim />
                </div>
              </div>

              <div className="cb-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <Btn
                  dir="left"
                  disabled={isFirst}
                  onClick={() => !isFirst && setActiveIndex((i) => i - 1)}
                />
                <Btn
                  dir="right"
                  disabled={isLast}
                  onClick={() => !isLast && setActiveIndex((i) => i + 1)}
                />
              </div>

            </>
          );
        })()}

        <p style={{ maxWidth: 780, margin: '2.0rem auto 0', lineHeight: 1.55 }}>
          Comment: need to update INFO here.
        </p>
      </section>



      {/* IMPROVING ACCESSIBILITY */}
      <section>
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 5vw, 2.2rem)', 
            color: '#243563',
            fontWeight: 800,
            marginBottom: '1.6rem',
            textShadow: '0 1px 1px rgba(0,0,0,0.2)',
          }}
        >
          Improving Accessibility for Blindness
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 1.6rem' }}>
          Users with Blindess may not be able to see the world around them. Computer programmers should make their software more accessible for such users by following these guidelines:
        </p>

        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <DropdownRow
            id={1}
            openId={openId}
            setOpenId={setOpenId}
            text="1. Do not rely on images to convey content. Provide alt-text or textual for all graphics "
          >
            <div style={{ display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',           
                  gap: '1.5rem',              
                  marginTop: '1.5rem', }}>  
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/sightlessSearch/Group 179.png"}
                    alt="Avoid example and Instead example"
                    style={{ width: '100%', maxWidth: '700px', height: 'auto', borderRadius: '2px' }}
                  />
                </div>
              </div>
          </DropdownRow>

          <DropdownRow
            id={2}
            openId={openId}
            setOpenId={setOpenId}
            text="2. Provide keyboard support for all software instead of relying only on a mouse  "
          >
            <p>
              Comment: need to update the images here.
            </p>
            <div style={{ display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',           
                  gap: '1.5rem',              
                  marginTop: '1.5rem', }}>  
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/dimmedDetails/Group 176.png"}
                    alt="Inllustration of keyboard-friendly software"
                    style={{ height: '100%', maxHeight: '220px', width: 'auto', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/dimmedDetails/Group 177.png"}
                    alt="Inllustration of not cursor reliant software"
                    style={{ height: '100%', maxHeight: '220px', width: 'auto', borderRadius: '8px' }}
                  />
                </div>
            </div>
          </DropdownRow>

          <DropdownRow
            id={3}
            openId={openId}
            setOpenId={setOpenId}
            text="3. Implement screen readers,  descriptive headings, skip option for long lists"
          >
            <p>
                Comment: need to update here.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', 
                  gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/sightlessSearch/Group 180.png"}
                    alt="Image from webstyleguide.com"
                    style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '5px' }}
                  />
                </div>

              </div>
          </DropdownRow>

          <DropdownRow
            id={4}
            openId={openId}
            setOpenId={setOpenId}
            text="4. Do not rely on color alone for identification."
          >
            
            <div style={{ display: 'flex', justifyContent: 'center', 
              flexWrap: 'wrap',           
              gap: '1.5rem',              
              marginTop: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/sightlessSearch/Avoid.png"}
                    alt="Avoid example"
                    style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/sightlessSearch/Instead.png"}
                    alt="Instead example"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
            </div>
          </DropdownRow>

          
        </div>
      </section>

      
    </div>
  );

  return (
    <LearnMorePage
      title="Implementing Accessibility:"
      subtitle="Designing for Color Blindness and More"
      imagePath={process.env.PUBLIC_URL + "/icons/color-blindness-illustration.png"}
      content={content}
    />
  );
}

/* helper components */
function DropdownRow({ id, openId, setOpenId, text, children }) {
  const isOpen = openId === id;

  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: '#D9D9D9',
          border: 'none',
          borderRadius: '8px',
          padding: '1.0rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.08)',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(1rem, 3.2vw, 1.2rem)',    
            fontWeight: 600,        
            color: '#1E1E1E',
            textAlign: 'left',
          }}
        >
          {text}
        </span>

        <span
          aria-hidden="true"
          style={{
            width: 24,
            height: 24,
            display: 'grid',
            placeItems: 'center',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="#222"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            background: 'transparent',
            padding: '1.2rem 1.8rem 0.8rem',
          }}
        >
          <div style={{ maxWidth: 950, margin: '0 auto' }}>{children}</div>
        </div>
      )}
    </div>
  );
}



export default SightlessSearchLearn;
