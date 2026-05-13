import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * ColorClashball3InstructionPage Component
 * ball 3/4 instruction page for Color Clash (Click-free)
 */
function ColorClashball3InstructionPage() {
  const instructions = [
    "In this ball, you will have 30 seconds to pop as many red, green, or yellow balloons as possible.",
    "You will see instructions to pop either a red, green, or yellow balloon displayed underneath the time bar.",
    "Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/color-clash-play/game/3`);
  };

  return (
    <InstructionPage
      title="Color Clash - ball 3/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashball3.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashball3InstructionPage;