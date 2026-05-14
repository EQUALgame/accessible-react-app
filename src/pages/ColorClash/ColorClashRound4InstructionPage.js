import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';



/**
 * ColorClashRound4InstructionPage Component
 * Round 4/4 instruction page for Color Clash (Audio Harmony)
 */
function ColorClashRound4InstructionPage() {
  const instructions = [
    "In this round, you will once again experience an auditory impairment simulation, but with the assistance of the line of text underneath the time bar which color to pop.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/color-clash-play/game/4`);
  };

  return (
    <InstructionPage
      title="Color Clash - Round 4/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashRound4.svg"} // Path to your PNG image
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashRound4InstructionPage;
