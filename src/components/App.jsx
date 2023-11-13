import React from 'react';
// import '../App.css';
import '../styles/main.scss';
// import '../index.css';
// import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
// import SunMoon from './SunMoon.jsx';
// import WeAre from './WeAre.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
import SeeOurProjects from './SeeOurProjects.jsx';
import ArtistCorner from './ArtistCorner.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import useDarkMode from 'use-dark-mode';
// import styled from 'styled-components';
// import SDSText from '../assets/SDS_Text.png';
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
      <main class="position-relative">
        <Router>
          <nav>
            <Link to="/" style={{flex:'auto'}}>
              <button class="home-button"></button>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/team">Meet the Team</Link>
            <Link to="/projects">See Our Projects</Link>
            <Link to="/artistcorner"  style={{marginRight:'2em'}}>Artist Spotlight</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home darkMode={darkMode}/>} />
            <Route exact path="/team" element={<MeetTheTeam darkMode={darkMode}/>} />
            <Route exact path="/projects" element={<SeeOurProjects darkMode={darkMode}/>} />
            <Route exact path="/artistcorner" element={<ArtistCorner darkMode={darkMode}/>} />
          </Routes>
        </Router>
        <Footer/>
      </main>
    </>
  );
}




// :
// <>
// <AppWrapper>
// <Router>
// <HeaderNav>
// <Link to="/" style={{flex:'auto'}}>
//     <HomeButton></HomeButton>
//   </Link>
//   <Link to="/">Home</Link>
//     <Link to="/team">Meet the Team</Link>
//     <Link to="/projects">See Our Projects</Link>
//     <Link to="/artistcorner"  style={{marginRight:'2em'}}>Artist Spotlight</Link>
//     {/* <Link to="/follow">follow us</Link> */}
//   </HeaderNav>
//   <Routes>
//     <Route exact path="/" element={<Home darkMode={darkMode}/>} />
//     <Route exact path="/team" element={<MeetTheTeam darkMode={darkMode}/>} />
//     <Route exact path="/projects" element={<SeeOurProjects darkMode={darkMode}/>} />
//     <Route exact path="/artistcorner  style={{marginRight:'2em'}}" element={<ArtistCorner darkMode={darkMode}/>} />
//   </Routes>
// </Router>
// <Footer darkMode={darkMode} />
// </AppWrapper>
// </>
// }

// const AppWrapper = styled.main`
//   position: relative;
// `;

// const HomeButton = styled.button`
//   flex: auto;
//   background: transparent;
//   border: none;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   background-image: url(${SDSText});
//   height:60px;
//   background-position: center left;
//   background-size: contain;
//   background-repeat: no-repeat;
//   cursor: pointer;
// }
// `;

// // const TextImg = styled.img`
// //   height:50px;
// // `;

// const HeaderNav = styled.nav`
//   backdrop-filter: blur(20px);
//   top: 0;
//   display: flex;
//   justify-content: flex-end;
//   position: fixed;
//   width: 100%;
//   padding-right: 20px;
//   z-index: 3;
//   height: 15vh;
//   align-items: center;
//   max-height: 80px;
//   a {
//     margin-left: 2em;
//     text-decoration: unset;
//     color: black;
//     font-size: 18px;
//   }
// `;
// const HeaderNavDark = styled(HeaderNav)`
//   a {
//     color: white;
//   }
// `;

// // const ScrollContainer = styled.div`
// //   scroll-snap-type: y proximity;
// //   /* height: 100%; */
// //   scroll-snap-points-y: repeat(100vh);
// //   /* overflow: scroll; */
// // `;

// const FixedPosition = styled.div`
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
// /* scroll-snap-type: y mandatory;
//   overflow-y: scroll;
//   height: 100vh;
//   overflow-x: hidden; */
//   // scroll-snap-points-y: repeat(1zx00vh);
// `;

// const FirstView = styled.div`
//   height: 100vh;
//   scroll-snap-align: start;
// `;
// // const SecondView = styled(FirstView)``;