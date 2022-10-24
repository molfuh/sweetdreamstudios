import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MeetTheTeam from './MeetTheTeam.jsx';
import App from './App.js';

export default function Header ({darkMode}) {
  return (
    <HeaderStyle>
      <nav>
        <Link to="/">go home</Link>
        <a>meet the team</a>
        <a>see our projects</a>
        <a>follow us</a>
      </nav>
    {/* <Routes> */}
    {/* <Route path="/" element={<App />}> */}
      {/* <Route path="teams" element={<MeetTheTeam />} /> */}
      {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
      {/* <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} /> */}
      {/* </Route> */}
    {/* </Route> */}
  {/* </Routes> */}
      </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
    z-index: 1;
    right: 0;
    color: white;
    width: 50%;
    float: right;
    border-bottom: 1px solid white;
    height: 30px;
    margin: 1.5em 1.5em 0;
    display: flex;
    justify-content: flex-end;
    a {
        min-width: 25%;
        display: flex;
        justify-content: center;
    }
`;
