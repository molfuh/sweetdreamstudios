import React from 'react';
import '../App.css';
import '../index.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import WeAre from './WeAre.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
import Home from './Home.jsx';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Header () {
  const darkMode = useDarkMode(true);
  return (
    <>
    {darkMode.value ? 
    <Router>
    <HeaderNavDark>
      <Link to="/">go home</Link>
        <Link to="/team">meet the team</Link>
        <Link to="/projects">see our projects</Link>
        {/* <Link to="/follow">follow us</Link> */}
      </HeaderNavDark>
      <Routes>
        <Route exact path="/" element={<Home darkMode={darkMode}/>} />
        <Route exact path="/team" element={<MeetTheTeam darkMode={darkMode}/>} />
      </Routes>
    </Router>
    :
    <Router>
    <HeaderNav>
      <Link to="/">go home</Link>
        <Link to="/team">meet the team</Link>
        <Link to="/projects">see our projects</Link>
        {/* <Link to="/follow">follow us</Link> */}
      </HeaderNav>
      <Routes>
        <Route exact path="/" element={<Home darkMode={darkMode}/>} />
        <Route exact path="/team" element={<MeetTheTeam darkMode={darkMode}/>} />
      </Routes>
    </Router>
}
    </>
  );
      
}

const HeaderNav = styled.nav`
  top: 0;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  z-index: 3;
  a {
    margin-right: 1em;
    text-decoration: unset;
    color: black;
  }
`;
const HeaderNavDark = styled(HeaderNav)`
  a {
    color: white;
  }
`;

// const ScrollContainer = styled.div`
//   scroll-snap-type: y proximity;
//   /* height: 100%; */
//   scroll-snap-points-y: repeat(100vh);
//   /* overflow: scroll; */
// `;

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
// const SecondView = styled(FirstView)``;