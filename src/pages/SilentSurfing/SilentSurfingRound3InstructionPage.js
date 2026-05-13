import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionPage from '../../components/InstructionPage';

function SilentSurfingball3InstructionPage() {
  const instructions = [
    "This ball adds both audio and a text label underneath the timer — showing how combined cues improve accessibility.",
    "The audio will play and the text will indicate which color to pop: red, green, or yellow.",
    "Scoring works the same: correct = +1 for you, wrong = -1 for you and +1 for the computer.",
    "Make sure your computer volume is at least 50%.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/silent-surfing-play/game/3');
  };

  return (
    <InstructionPage
      title="Silent Surfing – ball 3/4"
      instructions={instructions}
      onStartGame={handleStartGame}
    />
  );
}

export default SilentSurfingball3InstructionPage;

