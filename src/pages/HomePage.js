import React, { useState } from 'react';
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

const categories = ['Vision', 'Dexterity', 'Auditory', 'Cognitive', 'All'];

const games = [
  {
    title: 'Color Clash',
    category: 'Vision',
    description: 'Accessibility for Color Blindness and more',
    route: '/color-clash',
    Icon: ColorClashIcon,
    iconHeight: 100,
  },
  {
    title: 'Dimmed Details',
    category: 'Vision',
    description: 'Accessibility for Low Vision and more',
    route: '/dimmed-details',
    Icon: DimmedDetailsIcon,
    iconHeight: 100,
  },
  {
    title: 'Sightless Search',
    category: 'Vision',
    description: 'Accessibility for Blindness and more',
    route: '/sightless-search',
    Icon: SightlessSearchIcon,
    iconHeight: 100,
  },
  {
    title: 'Silent Surfing',
    category: 'Auditory',
    description: 'Accessibility for Deafness and more',
    route: '/silent-surfing',
    Icon: SilentSurfingIcon,
    iconHeight: 100,
  },
  {
    title: 'Tap Trouble',
    category: 'Dexterity',
    description: 'Accessibility for Limited Dexterity and more',
    Icon: TapTroubleIcon,
    iconHeight: 120,
    animated: true,
  },
  {
    title: 'Hesitant Hover',
    category: 'Dexterity',
    description: 'Accessibility for Limited Dexterity and more (keyboard + mouse needed)',
    route: '/hesitant-hover',
    Icon: HesitantHoverIcon,
    iconHeight: 100,
  },
  {
    title: 'Scrambled Script',
    category: 'Cognitive',
    description: 'Accessibility for Dyslexia and more',
    route: '/scrambled-script',
    Icon: ScrambledScriptIcon,
    iconHeight: 120,
    animated: true,
  },
  {
    title: 'Fractured Focus',
    category: 'Cognitive',
    description: 'Accessibility for ADHD and more',
    Icon: FracturedFocusIcon,
    iconHeight: 100,
  },
];


/**
 * HomePage Component
 * Displays the main landing page with game cards and hero section
 */
function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const visibleGames = selectedCategory === 'All'
    ? games
    : games.filter((game) => game.category === selectedCategory);

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
          <nav className="game-category-filter mb-4" aria-label="Filter games by accessibility category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`game-category-filter__button${selectedCategory === category ? ' is-selected' : ''}`}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          <Row className="g-4 justify-content-center">
            {visibleGames.map(({ title, description, route, Icon, iconHeight, animated }) => {
              const card = (
                <Card
                  as={route ? Link : undefined}
                  to={route}
                  className="game-card h-100 shadow-sm border-0 text-decoration-none"
                >
                  <Card.Body className="p-3 d-flex align-items-center">
                    <div className="card-icon me-3">
                      <Icon height={iconHeight} />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{title}</h5>
                      <small className="text-muted">{description}</small>
                    </div>
                  </Card.Body>
                </Card>
              );

              return (
                <Col key={title} lg={4} md={6}>
                  {animated ? (
                    <motion.div initial="rest" whileHover="hover" whileFocus="hover">
                      {card}
                    </motion.div>
                  ) : card}
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;