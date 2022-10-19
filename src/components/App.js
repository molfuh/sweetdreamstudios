import React from 'react';
import '../App.css';
import '../index.css';
// import './light.css';
// import './dark.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import WeAre from './WeAre.jsx';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

export default function App () {
    const darkMode = useDarkMode(true);
  return (
    <>
          <DarkModeToggleFunc darkMode={darkMode}/>
    <div style={{position:'fixed', width: '100vw', height: '100vh'}}>
          <SunMoon darkMode={darkMode}/>
    </div>
          <WeAre darkMode={darkMode}/>
</>
          );
}

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 300vh;
  overflow-x: hidden;
  scroll-snap-points-y: repeat(100vh);
`;