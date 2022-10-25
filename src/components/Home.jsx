import React from 'react';
import '../App.css';
import '../index.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import WeAre from './WeAre.jsx';
// import Header from './Header.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
// import Home from './Home.jsx';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Home () {
const darkMode = useDarkMode(true);
return (
   <>
      <DarkModeToggleFunc darkMode={darkMode}/>
      <FixedPosition>
        {/* <Header darkMode={darkMode}/> */}
        <SunMoon darkMode={darkMode}/>
      </FixedPosition>
        <FirstView>
          <WeAre darkMode={darkMode} />
        </FirstView>
    </>
)
}

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