// src/pages/learn_more/ColorBlindnessLearn.js
import React, { useState, useRef } from 'react';
import LearnMorePage from '../../components/LearnMorePage';
import './LearnMore.css';

const COLOR_MODES = [
  { id: 'normal', name: 'No Color Blindness', img: process.env.PUBLIC_URL + '/icons/colorClash/no color blindesss.png' },
  { id: 'protanopia', name: 'Protanopia', img: process.env.PUBLIC_URL + '/icons/colorClash/Protanopia.png' },
  { id: 'deuteranopia', name: 'Deuteranopia', img: process.env.PUBLIC_URL + '/icons/colorClash/Deuteranopia.png' },
  { id: 'tritanopia', name: 'Tritanopia', img: process.env.PUBLIC_URL + '/icons/colorClash/Tritanopia.png' }, 
  { id: 'achromatopsia', name: 'Achromatopsia', img: process.env.PUBLIC_URL + '/icons/colorClash/Achromatopsia.png' },
];

function ColorBlindnessLearn() {
  const [activeIndex, setActiveIndex] = useState(0); 

  const total = COLOR_MODES.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;
  const [openId, setOpenId] = useState(null);
  const [offset, setOffset] = useState(-1);   // 0(prev) / -1(curr) / -2(next)
  const [animating, setAnimating] = useState(false);
  const [animDir, setAnimDir] = useState(null);


  const content = (
    <div>
      
      {/* ABOUT COLOR BLINDNESS (carousel) */}
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
          Color Blindness at a Glance
        </h2>

        {(() => {
          const total = COLOR_MODES.length;
          const isFirst = activeIndex === 0;
          const isLast = activeIndex === total - 1;

          const prev = !isFirst ? COLOR_MODES[activeIndex - 1] : null;
          const curr = COLOR_MODES[activeIndex];
          const next = !isLast ? COLOR_MODES[activeIndex + 1] : null;

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
                aria-label={dir === 'left' ? 'Previous color mode' : 'Next color mode'}
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
          Color blindness is fairly common, more among males, and it manifests in different ways.
          Many people with color blindness can still see colors — just not always in the typical way.
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
          Improving Accessibility for Color Blindness
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 1.6rem' }}>
          Users with color blindness may not be able to identify colors. Computer programmers should
          make their software more accessible for such users by following these guidelines:
        </p>

        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <DropdownRow
            id={1}
            openId={openId}
            setOpenId={setOpenId}
            text="1. Don’t use color alone for identification"
          >
            <p>
              For example, avoid using red and green for right/wrong without any other context in
              password fields:
            </p>
            <div style={{ display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',           // ✅ allow wrapping
                  gap: '1.5rem',              // smaller gap
                  marginTop: '1.5rem', }}>  
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/Avoid1.png"}
                    alt="Avoid example"
                    style={{ width: '85%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/Instead1.png"}
                    alt="Instead example"
                    style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
            </div>

          </DropdownRow>

          <DropdownRow
            id={2}
            openId={openId}
            setOpenId={setOpenId}
            text="2. Use sufficient contrast to make the text stand out from the background"
          >
            <div style={{ display: 'flex', justifyContent: 'center', 
              flexWrap: 'wrap',           // ✅ allow wrapping
              gap: '1.5rem',              // smaller gap
              marginTop: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/Avoid2.svg"}
                    alt="Avoid example"
                    style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/Instead2.svg"}
                    alt="Instead example"
                    style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
            </div>
          </DropdownRow>

          <DropdownRow
            id={3}
            openId={openId}
            setOpenId={setOpenId}
            text="3. Underline links; don’t rely only on the color to indicate a link"
          >
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', 
                  gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/avoid3.png"}
                    alt="Avoid example"
                    style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/instead3.png"}
                    alt="Instead example"
                    style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '8px' }}
                  />
                </div>
              </div>
          </DropdownRow>

          <DropdownRow
            id={4}
            openId={openId}
            setOpenId={setOpenId}
            text="4. Use descriptive text or alternate text to indicate color if it is important"
          >
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',   
                  gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={process.env.PUBLIC_URL + "/icons/colorClash/red circles.png"}
                    alt="Avoid example"
                    style={{ width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '8px' }}
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



export default ColorBlindnessLearn;
