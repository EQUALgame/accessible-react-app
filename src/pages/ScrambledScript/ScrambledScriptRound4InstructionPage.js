import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * ScrambledScriptInstructionPage Component
 * Round 4/4 instruction page for Scrambled Script
 * Uses the reusable InstructionPage component
 */
function ScrambledScriptInstructionPage() {
  // Instruction content for Round 4
  const instructions = [
    "In this round, you will once again experience a simulation of the challenges people with dyslexia can face when reading text, but with the assistance of a picture corresponding to the word included on the ball.",
    <strong>Please make sure your computer volume is on.</strong>,
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    console.log("Starting Scrambled Script Round 4...");
    navigate(`/scrambled-script-play/game/4`);
  };

  return (
    <InstructionPage
      title="Scrambled Script - Round 4/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/scrambledScript/scrambledScriptRound4.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ScrambledScriptInstructionPage;

