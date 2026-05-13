import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';



/**
 * ColorClashball4InstructionPage Component
 * ball 4/4 instruction page for Color Clash (Audio Harmony)
 */
function ColorClashball4InstructionPage() {
  const instructions = [
    "In this ball, you will try to get as many points as possible by clicking on the right balloon.",
    "You will see instructions to pop a red, green, or yellow balloon displayed underneath the ball timer.",
    "Clicking on the right balloon gives you a point, while clicking on the wrong one takes one away from you and gives it to the computer.",
    "Click the arrow to begin!"
  ];

  const navigate = useNavigate();

  // Handle start game action
  const handleStartGame = () => {
    navigate(`/color-clash-play/game/4`);
  };

  return (
    <InstructionPage
      title="Color Clash - ball 4/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashball4.svg"} 
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashball4InstructionPage;