import React from 'react';
import InstructionPage from '../../components/InstructionPage';


/**
 * ColorClashInstructionPage Component
 * Round 1/4 instruction page for Color Clash
 * Uses the reusable InstructionPage component
 */
function SilentSurfingInstructionPage() {
  // Instruction content for Round 1
  const instructions = [
    "In this round, you will have 30 seconds to pop as many red or green balloons as possible.",
    "You will see instructions to pop either a red or green balloon displayed underneath the time bar.",
    "Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.",
    "Click the arrow to begin!"
  ];

  // Handle start game action
  const handleStartGame = () => {
    console.log("Starting Silent Surfing Round 1...");
    // TODO: Navigate to actual game page
  };

  return (
    <InstructionPage
      title="Silent Surfing - Round 1/4"
      instructions={instructions}
    //   imagePath=".png" // Path to your PNG image
      onStartGame={handleStartGame}
    />
  );
}

export default SilentSurfingInstructionPage;

