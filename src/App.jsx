import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Work from './components/Work';
import PlayReel from './components/PlayReel';
import Images from './components/Images';
import Spread from './components/Spread';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen font-[gilroy]'>
      <NavBar />
      <LandingPage />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
    </div>
  );
};

export default App; 