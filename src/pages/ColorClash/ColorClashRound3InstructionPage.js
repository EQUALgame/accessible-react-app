import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * ColorClashball3InstructionPage Component
 * ball 3/4 instruction page for Color Clash (Click-free)
 */
function ColorClashRound3InstructionPage() {
  const instructions = [
    "In this round, you will play by the same rules: You will have 30 seconds to pop as many green or red balls as you can.",
    "This time, however, each ball now has a letter inside it that shows its color: 'R' for red, 'Y' for yellow, and 'G' for green.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/color-clash-play/game/3`);
  };

  return (
    <InstructionPage
      title="Color Clash - Round 3/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashRound3.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashRound3InstructionPage;
