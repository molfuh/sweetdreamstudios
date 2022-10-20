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
      <FixedPosition>
        <Header darkMode={darkMode}/>
        <SunMoon darkMode={darkMode}/>
      </FixedPosition>
      {/* <ScrollContainer> */}
        <FirstView>
          <WeAre darkMode={darkMode} />
        </FirstView>
        {/* <SecondView> */}
          {/* <WeAre darkMode={darkMode} /> */}
        {/* </SecondView> */}
      {/* </ScrollContainer> */}
    </Router>
  );
}

const ScrollContainer = styled.div`
  scroll-snap-type: y proximity;
  /* height: 100%; */
  scroll-snap-points-y: repeat(100vh);
  /* overflow: scroll; */
`;

const FixedPosition = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
/* scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 300vh;
  overflow-x: hidden; */
  // scroll-snap-points-y: repeat(1zx00vh);
`;

const FirstView = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
const SecondView = styled(FirstView)``;