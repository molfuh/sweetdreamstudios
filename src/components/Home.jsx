import React from 'react';
import '../App.css';
import '../index.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import WeAre from './WeAre.jsx';
import Mission from './Mission.jsx';
// import Header from './Header.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
// import Home from './Home.jsx';
// import useDarkMode from 'use-dark-mode';s
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Home ({darkMode}) {
// const darkMode = useDarkMode(true);
return (
  <>
  {darkMode.value ? 
   <HomeBgDark>
      <DarkModeToggleFunc darkMode={darkMode}/>
      <FixedPosition>
        {/* <Header darkMode={darkMode}/> */}
        <SunMoon darkMode={darkMode}/>
      </FixedPosition>
        <FirstView>
          <WeAre darkMode={darkMode} />
        </FirstView>
        <SecondView>
          <Mission darkMode={darkMode} />
        </SecondView>
    </HomeBgDark>
    :
    <HomeBg>
    <DarkModeToggleFunc darkMode={darkMode}/>
    <FixedPosition>
      {/* <Header darkMode={darkMode}/> */}
      <SunMoon darkMode={darkMode}/>
    </FixedPosition>
      <FirstView>
        <WeAre darkMode={darkMode} />
      </FirstView>
  </HomeBg>
}
    </>
)
}

const HomeBg = styled.div`
  background: linear-gradient(to bottom,rgb(76 118 170) 0%,rgb(219 185 136) 100%);
  height: 200vh;
`;
const HomeBgDark = styled(HomeBg)`
  // background: linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(7, 18, 67) 8%, rgb(29 15 63) 20%, rgb(5 4 8) 60%, rgb(0 0 0) 100%);
  background: linear-gradient(to bottom,#060f38 0%,rgb(0 0 0) 100%);
`;

// .light-mode {
//   /* background: linear-gradient(to bottom, rgb(114 202 253 / 50%) 0%, rgb(114 202 253 / 100%) 100%); */
//   /* background: linear-gradient(to bottom, rgb(173 125 118) 0%, rgb(205 143 119) 50%, rgb(219 185 136) 100%) */
//   background: linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(76 118 170) 7%, rgb(219 185 136) 25%, rgb(227 201 138) 100%);
// }

// .dark-mode {
//   /* background: linear-gradient(to bottom, #000000 0%, #0a2177 100%); */
//   /* background: linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(7, 18, 67) 15%, rgb(3, 22, 104) 50%, rgb(3, 22, 104) 100%); */
//   background: linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(7, 18, 67) 8%, rgb(29 15 63) 20%, rgb(5 4 8) 60%, rgb(0 0 0) 100%);
// }

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