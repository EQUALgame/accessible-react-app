import React from 'react';
import InstructionPage from '../../components/InstructionPage';
import { useNavigate, useParams } from 'react-router-dom';



/**
 * ColorClashRound4InstructionPage Component
 * Round 4/4 instruction page for Color Clash (Audio Harmony)
 */
function ColorClashRound4InstructionPage() {
  const instructions = [
    "In this round, you will try to get as many points as possible by clicking on the right balloon.",
    "You will see instructions to pop a red, green, or yellow balloon displayed underneath the round timer.",
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
      title="Color Clash - Round 4/4"
      instructions={instructions}
      imagePath={process.env.PUBLIC_URL + "/icons/colorClash/colorClashRound4.svg"} // Path to your PNG image
      onStartGame={handleStartGame}
    />
  );
}

export default ColorClashRound4InstructionPage;