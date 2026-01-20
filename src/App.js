// App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";

import HomePage from './pages/HomePage';

import ColorClashRound from './games/colorclash/Round';
import ColorClashGame from './games/colorclash/Game';
import ColorClashScores from './games/colorclash/Scores';

import ColorClashPage from './pages/ColorClash/ColorClashPage';
import ColorClashRound1InstructionPage from './pages/ColorClash/ColorClashRound1InstructionPage';
import ColorClashRound2InstructionPage from './pages/ColorClash/ColorClashRound2InstructionPage';
import ColorClashRound3InstructionPage from './pages/ColorClash/ColorClashRound3InstructionPage';
import ColorClashRound4InstructionPage from './pages/ColorClash/ColorClashRound4InstructionPage';
import ColorClashLearnPage from './pages/learn_more/ColorClashLearnPage';


import ScrambledScriptPage from './pages/ScrambledScript/ScrambledScriptPage';
import ScrambledScriptRound1InstructionPage from './pages/ScrambledScript/ScrambledScriptRound1InstructionPage';
import ScrambledScriptRound2InstructionPage from './pages/ScrambledScript/ScrambledScriptRound2InstructionPage';
import ScrambledScriptRound3InstructionPage from './pages/ScrambledScript/ScrambledScriptRound3InstructionPage';
import ScrambledScriptRound4InstructionPage from './pages/ScrambledScript/ScrambledScriptRound4InstructionPage';

import DimmedDetailsPage from './pages/DimmedDetails/DimmedDetailsPage';
import DimmedDetailsRound1InstructionPage from './pages/DimmedDetails/DimmedDetailsRound1InstructionPage';
import DimmedDetailsRound2InstructionPage from './pages/DimmedDetails/DimmedDetailsRound2InstructionPage';
import DimmedDetailsRound3InstructionPage from './pages/DimmedDetails/DimmedDetailsRound3InstructionPage';
import DimmedDetailsRound4InstructionPage from './pages/DimmedDetails/DimmedDetailsRound4InstructionPage';

import SightlessSearchPage from './pages/SightlessSearch/SightlessSearchPage';
import SightlessSearchRound1InstructionPage from './pages/SightlessSearch/SightlessSearchRound1InstructionPage';
import SightlessSearchRound2InstructionPage from './pages/SightlessSearch/SightlessSearchRound2InstructionPage';
import SightlessSearchRound3InstructionPage from './pages/SightlessSearch/SightlessSearchRound3InstructionPage';
import SightlessSearchRound4InstructionPage from './pages/SightlessSearch/SightlessSearchRound4InstructionPage';

import SilentSurfingPage from './pages/SilentSurfing/SilentSurfingPage';
import SilentSurfingRound1InstructionPage from './pages/SilentSurfing/SilentSurfingRound1InstructionPage';
import SilentSurfingRound2InstructionPage from './pages/SilentSurfing/SilentSurfingRound2InstructionPage';
import SilentSurfingRound3InstructionPage from './pages/SilentSurfing/SilentSurfingRound3InstructionPage';
import SilentSurfingRound4InstructionPage from './pages/SilentSurfing/SilentSurfingRound4InstructionPage';

import HesitantHoverPage from './pages/HesitantHover/HesitantHoverPage';
import HesitantHoverRound1InstructionPage from './pages/HesitantHover/HesitantHoverRound1InstructionPage';
import HesitantHoverRound2InstructionPage from './pages/HesitantHover/HesitantHoverRound2InstructionPage';
import HesitantHoverRound3InstructionPage from './pages/HesitantHover/HesitantHoverRound3InstructionPage';
import HesitantHoverRound4InstructionPage from './pages/HesitantHover/HesitantHoverRound4InstructionPage';

import DimmedDetailsLearnPage from './pages/learn_more/DimmedDetailsLearnPage';
import ScrambledScriptLearnPage from './pages/learn_more/ScrambledScriptLearnPage';
import SightlessSearchLearnPage from './pages/learn_more/SightlessSearchLearnPage';
import SilentSurfingLearnPage from './pages/learn_more/SilentSurfingLearnPage';
import HesitantHoverLearnPage from './pages/learn_more/HesitantHoverLearnPage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Color Clash */}
        <Route path="/color-clash" element={<ColorClashPage />} />
        <Route path="/color-clash/round-1" element={<ColorClashRound1InstructionPage />} />
        <Route path="/color-clash/round-2" element={<ColorClashRound2InstructionPage />} />
        <Route path="/color-clash/round-3" element={<ColorClashRound3InstructionPage />} />
        <Route path="/color-clash/round-4" element={<ColorClashRound4InstructionPage />} />
        <Route path="/color-clash/learn-more" element={<ColorClashLearnPage />} />
        <Route path="/color-clash-play/game/:round" element={<ColorClashGame />} />
        <Route path="/color-clash-play/recap" element={<ColorClashScores />} />

        {/* Scrambled Script */}
        <Route path="/scrambled-script" element={<ScrambledScriptPage />} />
        <Route path="/scrambled-script/round-1" element={<ScrambledScriptRound1InstructionPage />} />
        <Route path="/scrambled-script/round-2" element={<ScrambledScriptRound2InstructionPage />} />
        <Route path="/scrambled-script/round-3" element={<ScrambledScriptRound3InstructionPage />} />
        <Route path="/scrambled-script/round-4" element={<ScrambledScriptRound4InstructionPage />} />
        <Route path="/scrambled-script/learn-more" element={<ScrambledScriptLearnPage />} />

        {/* Dimmed Details */}
        <Route path="/dimmed-details" element={<DimmedDetailsPage />} />
        <Route path="/dimmed-details/round-1" element={<DimmedDetailsRound1InstructionPage />} />
        <Route path="/dimmed-details/round-2" element={<DimmedDetailsRound2InstructionPage />} />
        <Route path="/dimmed-details/round-3" element={<DimmedDetailsRound3InstructionPage />} />
        <Route path="/dimmed-details/round-4" element={<DimmedDetailsRound4InstructionPage />} />
        <Route path="/dimmed-details/learn-more" element={<DimmedDetailsLearnPage />} />

        {/* Sightless Search */}
        <Route path="/sightless-search" element={<SightlessSearchPage />} />
        <Route path="/sightless-search/round-1" element={<SightlessSearchRound1InstructionPage />} />
        <Route path="/sightless-search/round-2" element={<SightlessSearchRound2InstructionPage />} />
        <Route path="/sightless-search/round-3" element={<SightlessSearchRound3InstructionPage />} />
        <Route path="/sightless-search/round-4" element={<SightlessSearchRound4InstructionPage />} />
        <Route path="/sightless-search/learn-more" element={<SightlessSearchLearnPage />} />

        {/* Silent Surfing */}
        <Route path="/silent-surfing" element={<SilentSurfingPage />} />
        <Route path="/silent-surfing/round-1" element={<SilentSurfingRound1InstructionPage />} />
        <Route path="/silent-surfing/round-2" element={<SilentSurfingRound2InstructionPage />} />
        <Route path="/silent-surfing/round-3" element={<SilentSurfingRound3InstructionPage />} />
        <Route path="/silent-surfing/round-4" element={<SilentSurfingRound4InstructionPage />} />
        <Route path="/silent-surfing/learn-more" element={<SilentSurfingLearnPage />} />

        {/* Hesitant Hover */}
        <Route path="/hesitant-hover" element={<HesitantHoverPage />} />
        <Route path="/hesitant-hover/round-1" element={<HesitantHoverRound1InstructionPage />} />
        <Route path="/hesitant-hover/round-2" element={<HesitantHoverRound2InstructionPage />} />
        <Route path="/hesitant-hover/round-3" element={<HesitantHoverRound3InstructionPage />} />
        <Route path="/hesitant-hover/round-4" element={<HesitantHoverRound4InstructionPage />} />
        <Route path="/hesitant-hover/learn-more" element={<HesitantHoverLearnPage />} />

        {/* Fallback */}
        {/* You can add a 404 page here later if you want */}
      </Routes>
    </HashRouter>
  );
}

export default App;







// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import HomePage from './pages/HomePage';

// import ColorClashPage from './pages/ColorClash/ColorClashPage';
// import ColorClashRound1InstructionPage from './pages/ColorClash/ColorClashRound1InstructionPage';
// import ColorClashRound2InstructionPage from './pages/ColorClash/ColorClashRound2InstructionPage';
// import ColorClashRound3InstructionPage from './pages/ColorClash/ColorClashRound3InstructionPage';
// import ColorClashRound4InstructionPage from './pages/ColorClash/ColorClashRound4InstructionPage';

// import ScrambledScriptPage from './pages/ScrambledScript/ScrambledScriptPage';
// import ScrambledScriptRound1InstructionPage from './pages/ScrambledScript/ScrambledScriptRound1InstructionPage';
// import ScrambledScriptRound2InstructionPage from './pages/ScrambledScript/ScrambledScriptRound2InstructionPage';
// import ScrambledScriptRound3InstructionPage from './pages/ScrambledScript/ScrambledScriptRound3InstructionPage';
// import ScrambledScriptRound4InstructionPage from './pages/ScrambledScript/ScrambledScriptRound4InstructionPage';

// import DimmedDetailsPage from './pages/DimmedDetails/DimmedDetailsPage';
// import DimmedDetailsRound1InstructionPage from './pages/DimmedDetails/DimmedDetailsRound1InstructionPage';
// import DimmedDetailsRound2InstructionPage from './pages/DimmedDetails/DimmedDetailsRound2InstructionPage';
// import DimmedDetailsRound3InstructionPage from './pages/DimmedDetails/DimmedDetailsRound3InstructionPage';
// import DimmedDetailsRound4InstructionPage from './pages/DimmedDetails/DimmedDetailsRound4InstructionPage';

// import SightlessSearchPage from './pages/SightlessSearch/SightlessSearchPage';
// import SightlessSearchRound1InstructionPage from './pages/SightlessSearch/SightlessSearchRound1InstructionPage';
// import SightlessSearchRound2InstructionPage from './pages/SightlessSearch/SightlessSearchRound2InstructionPage';
// import SightlessSearchRound3InstructionPage from './pages/SightlessSearch/SightlessSearchRound3InstructionPage';
// import SightlessSearchRound4InstructionPage from './pages/SightlessSearch/SightlessSearchRound4InstructionPage';

// import SilentSurfingPage from './pages/SilentSurfing/SilentSurfingPage';
// import SilentSurfingRound1InstructionPage from './pages/SilentSurfing/SilentSurfingRound1InstructionPage';
// import SilentSurfingRound2InstructionPage from './pages/SilentSurfing/SilentSurfingRound2InstructionPage';
// import SilentSurfingRound3InstructionPage from './pages/SilentSurfing/SilentSurfingRound3InstructionPage';
// import SilentSurfingRound4InstructionPage from './pages/SilentSurfing/SilentSurfingRound4InstructionPage';

// import HesitantHoverPage from './pages/HesitantHover/HesitantHoverPage';
// import HesitantHoverRound1InstructionPage from './pages/HesitantHover/HesitantHoverRound1InstructionPage';
// import HesitantHoverRound2InstructionPage from './pages/HesitantHover/HesitantHoverRound2InstructionPage';
// import HesitantHoverRound3InstructionPage from './pages/HesitantHover/HesitantHoverRound3InstructionPage';
// import HesitantHoverRound4InstructionPage from './pages/HesitantHover/HesitantHoverRound4InstructionPage';

// import ColorClashLearnPage from './pages/learn_more/ColorClashLearnPage';
// import DimmedDetailsLearnPage from './pages/learn_more/DimmedDetailsLearnPage';
// import ScrambledScriptLearnPage from './pages/learn_more/ScrambledScriptLearnPage';
// import SightlessSearchLearnPage from './pages/learn_more/SightlessSearchLearnPage';
// import SilentSurfingLearnPage from './pages/learn_more/SilentSurfingLearnPage';
// import HesitantHoverLearnPage from './pages/learn_more/HesitantHoverLearnPage';


// function App() {

//   const currentPage = 'colorClash'; // Change this value to test different pages

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'colorClash':
//         return <ColorClashPage />;
//       case 'colorClashRound1':
//         return <ColorClashRound1InstructionPage />;
//       case 'colorClashRound2':
//         return <ColorClashRound2InstructionPage />;
//       case 'colorClashRound3':
//         return <ColorClashRound3InstructionPage />;
//       case 'colorClashRound4':
//         return <ColorClashRound4InstructionPage />;
//       case 'colorClashLearn':
//         return <ColorClashLearnPage />;

//       case 'scrambledScript':
//         return <ScrambledScriptPage />;
//         case 'scrambledScriptRound1':
//         return <ScrambledScriptRound1InstructionPage />;
//       case 'scrambledScriptRound2':
//         return <ScrambledScriptRound2InstructionPage />;
//       case 'scrambledScriptRound3':
//         return <ScrambledScriptRound3InstructionPage />;
//       case 'scrambledScriptRound4':
//         return <ScrambledScriptRound4InstructionPage />;
//       case 'scrambledScriptLearn':
//         return <ScrambledScriptLearnPage />;
      
//       case 'dimmedDetails':
//         return <DimmedDetailsPage />;
//         case 'dimmedDetailsRound1':
//         return <DimmedDetailsRound1InstructionPage />;
//       case 'dimmedDetailsRound2':
//         return <DimmedDetailsRound2InstructionPage />;
//       case 'dimmedDetailsRound3':
//         return <DimmedDetailsRound3InstructionPage />;
//       case 'dimmedDetailsRound4':
//         return <DimmedDetailsRound4InstructionPage />;
//       case 'dimmedDetailsLearn':
//         return <DimmedDetailsLearnPage />;
  
//       case 'sightlessSearch':
//         return <SightlessSearchPage />;
//         case 'sightlessSearchRound1':
//         return <SightlessSearchRound1InstructionPage />;
//       case 'sightlessSearchRound2':
//         return <SightlessSearchRound2InstructionPage />;
//       case 'sightlessSearchRound3':
//         return <SightlessSearchRound3InstructionPage />;
//       case 'sightlessSearchRound4':
//         return <SightlessSearchRound4InstructionPage />;
//       case 'sightlessSearchLearn':
//         return <SightlessSearchLearnPage />;
      
//       case 'silentSurfing':
//         return <SilentSurfingPage />;
//         case 'silentSurfingRound1':
//         return <SilentSurfingRound1InstructionPage />;
//       case 'silentSurfingRound2':
//         return <SilentSurfingRound2InstructionPage />;
//       case 'silentSurfingRound3':
//         return <SilentSurfingRound3InstructionPage />;
//       case 'silentSurfingRound4':
//         return <SilentSurfingRound4InstructionPage />;
//       case 'silentSurfingLearn':
//         return <SilentSurfingLearnPage />;
      
//       case 'hesitantHover':
//         return <HesitantHoverPage />;
//         case 'hesitantHoverRound1':
//         return <HesitantHoverRound1InstructionPage />;
//       case 'hesitantHoverRound2':
//         return <HesitantHoverRound2InstructionPage />;
//       case 'hesitantHoverRound3':
//         return <HesitantHoverRound3InstructionPage />;
//       case 'hesitantHoverRound4':
//         return <HesitantHoverRound4InstructionPage />;
//       case 'hesitantHoverLearn':
//         return <HesitantHoverLearnPage />;
      
//       case 'home':
//       default:
//         return <HomePage />;
//     }
//   };

//   return renderPage();
// }

// export default App;