import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * ColorClashRound2InstructionPage Component
 * Round 2/4 instruction page for Color Clash (Silent Signals)
 */
function ColorClashRound2InstructionPage() {
  const instructions = [
    "In this round, you will have 30 seconds to pop as many red or green balloons as possible.",
    "You will see instructions to pop either a red or green balloon displayed underneath the time bar.",
    "Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.",
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