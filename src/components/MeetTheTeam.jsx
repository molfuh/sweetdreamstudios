import React from 'react';
import styled from 'styled-components';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import Home from './Home.jsx';

export default function MeetTheTeam ({darkMode}) {
  return (
    <>
      {/* <Home/> */}
      <DarkModeToggleFunc darkMode={darkMode}/>
      {/* <FixedPosition> */}
     {/* <Header darkMode={darkMode}/> */}
     {/* <SunMoon darkMode={darkMode}/> */}
      {/* </FixedPosition> */}
    </>
  );
};

// {/* <DarkModeToggleFunc darkMode={darkMode}/>
// <FixedPosition>
//   {/* <Header darkMode={darkMode}/> */}
//   <SunMoon darkMode={darkMode}/>
// </FixedPosition> */}

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