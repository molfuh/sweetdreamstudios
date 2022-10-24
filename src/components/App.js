import React from 'react';
import '../App.css';
import '../index.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import WeAre from './WeAre.jsx';
import Header from './Header.jsx';
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
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

//   createBrowserRouter,
//   createRoutesFromElements,
//   Link
// } from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

export default function App () {
  const darkMode = useDarkMode(true);
  // const router = createBrowserRouter([
  //   {
  //     path: "/team",
  //     element: <MeetTheTeam />,
  //     // errorElement: <ErrorPage />,
  //   }
  //   // {
  //   //   path: "contacts/:contactId",
  //   //   element: <Contact />,
  //   // },
  // ]);
  return (
    <>
    <Router>
    <nav>
        <Link to="/">go home</Link>
        <Link to="team">meet the team</Link>
        <a>see our projects</a>
        <a>follow us</a>
      </nav>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      {/* <DarkModeToggleFunc darkMode={darkMode}/>
      <FixedPosition>
        <Header darkMode={darkMode}/>
        <SunMoon darkMode={darkMode}/>
      </FixedPosition>
        <FirstView>
          <WeAre darkMode={darkMode} />
        </FirstView> */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/team" element={<MeetTheTeam/>} />
          {/* <FirstView> */}
            {/* <WeAre darkMode={darkMode} /> */}
          {/* </FirstView>           */}
          {/* </Route> */}
        </Routes>
      {/* </div> */}
    </Router>
    </>
  );
      
}

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