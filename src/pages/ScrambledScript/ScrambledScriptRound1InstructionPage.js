import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';



/**
 * ScrambledScriptInstructionPage Component
 * Round 1/4 instruction page for Scrambled Script
 * Uses the reusable InstructionPage component
 */
function ScrambledScriptInstructionPage() {
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
    console.log("Starting Scrambled Script Round 1...");
    navigate(`/scrambled-script-play/game/1`);
  };

  return (
    <InstructionPage
      title="Scrambled Script - Round 1/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/scrambledScript/scrambledScriptRound1.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ScrambledScriptInstructionPage;

