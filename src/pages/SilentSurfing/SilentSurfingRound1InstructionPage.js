import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionPage from '../../components/InstructionPage';

function SilentSurfingball1InstructionPage() {
  const instructions = [
    "In this ball, you will have 30 seconds to pop as many red, green, or yellow balloons as possible.",
    "You will hear an audio cue telling you which color balloon to pop.",
    "Popping the correct color increases your score, while popping the incorrect color decreases your score and increases the computer's.",
    "Make sure your computer volume is at least 50%.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/silent-surfing-play/game/1');
  };

  return (
    <InstructionPage
      title="Silent Surfing – ball 1/4"
      instructions={instructions}
      onStartGame={handleStartGame}
    />
  );
}

export default SilentSurfingball1InstructionPage;

