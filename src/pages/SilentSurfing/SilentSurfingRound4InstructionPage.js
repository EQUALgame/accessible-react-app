import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionPage from '../../components/InstructionPage';

function SilentSurfingball4InstructionPage() {
  const instructions = [
    "This final ball simulates an audio impairment — no audio cue will play.",
    "A text label underneath the timer will still tell you which color to pop: red, green, or yellow.",
    "Notice how text alone makes the game fully accessible without relying on sound.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/silent-surfing-play/game/4');
  };

  return (
    <InstructionPage
      title="Silent Surfing – ball 4/4"
      instructions={instructions}
      onStartGame={handleStartGame}
    />
  );
}

export default SilentSurfingball4InstructionPage;

