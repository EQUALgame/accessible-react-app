import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * ColorClashRound2InstructionPage Component
 * Round 2/4 instruction page for Color Clash (Silent Signals)
 */
function ColorClashRound2InstructionPage() {
  const instructions = [
    "In this round, you will play by the same rules: You will have 30 seconds to pop as many green or red balls as you can.",
    "This time, however, you will experience what it is like to play with red-green color blindness (AKA Deuteranomaly).",
    "Click the arrow to begin!"
  ];
  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/color-clash-play/game/2`);
  };

  return (
    <InstructionPage
      title="Color Clash - Round 2/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashRound2.svg"} // Path to your PNG image
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashRound2InstructionPage;