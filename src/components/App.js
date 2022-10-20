import React from 'react';
import '../App.css';
import '../index.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import WeAre from './WeAre.jsx';
import Header from './Header.jsx';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App () {
  const darkMode = useDarkMode(true);
  return (
    <Router>
      <DarkModeToggleFunc darkMode={darkMode}/>
      <div style={{position:'fixed', width: '100vw', height: '100vh'}}>
        <Header darkMode={darkMode}/>
        <SunMoon darkMode={darkMode}/>
      </div>
      <div>
        <WeAre darkMode={darkMode} />
      </div>

    </Router>
  );
}

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 300vh;
  overflow-x: hidden;
  // scroll-snap-points-y: repeat(1zx00vh);
`;