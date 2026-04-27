import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * DimmedDetailsInstructionPage Component
 * Round 2/4 instruction page for Dimmed Details
 * Uses the reusable InstructionPage component
 */
function DimmedDetailsInstructionPage() {
  // Instruction content for Round 1
  const instructions = [
    "In this round, you will have 30 seconds to pop as many shapes as possible.",
    "You will see instructions to pop a shape displayed underneath the time bar.",
    "Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/dimmed-details-play/game/2`);

  };

  return (
    <InstructionPage
      title="Dimmed Details - Round 2/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/dimmedDetails/dimmedDetailsRound2.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default DimmedDetailsInstructionPage;