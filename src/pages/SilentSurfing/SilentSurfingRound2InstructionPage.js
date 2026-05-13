import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionPage from '../../components/InstructionPage';

function SilentSurfingball2InstructionPage() {
  const instructions = [
    "In this ball, you will play just as you did last ball, except the audio cue is gone — simulating an audio impairment.",
    "You still need to pop the correct color: red, green, or yellow.",
    "No text hints either. Can you figure out which balloon to pop without any cues?",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/silent-surfing-play/game/2');
  };

  return (
    <InstructionPage
      title="Silent Surfing – ball 2/4"
      instructions={instructions}
      onStartGame={handleStartGame}
    />
  );
}

export default SilentSurfingball2InstructionPage;

