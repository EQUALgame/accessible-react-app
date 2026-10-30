import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';


/**
 * ScrambledScriptInstructionPage Component
 * Round 2/4 instruction page for Scrambled Script
 * Uses the reusable InstructionPage component
 */
function ScrambledScriptInstructionPage() {
  // Instruction content for Round 2
  const instructions = [
    "In this round, you will play just as you did last round, once again having 30 seconds to pop as many balls as possible.",
    "This time, the words on the balls are rewritten in a way that demonstrates the challenges that people with dyslexia can have when trying to read text.",
    "Click the arrow to begin!",
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    console.log("Starting Scrambled Script Round 2...");
    navigate(`/scrambled-script-play/game/2`);};

  return (
    <InstructionPage
      title="Scrambled Script - Round 2/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/scrambledScript/scrambledScriptRound2.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ScrambledScriptInstructionPage;

