import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import InstructionPage from '../../components/InstructionPage';


/**
 * ColorClashInstructionPage Component
 * Round 1/4 instruction page for Color Clash
 * Uses the reusable InstructionPage component
 */
function ColorClashInstructionPage() {
  // Instruction content for Round 1
  const instructions = [
    "In this round, you will have 30 seconds to pop as many red or green balloons as possible.",
    "You will see instructions to pop either a red or green balloon displayed underneath the time bar.",
    "Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/color-clash-play/game/1`);
  };

  return (
    <InstructionPage
      title="Color Clash - Round 1/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashRound1.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashInstructionPage;