import React from 'react';
import useDarkMode from 'use-dark-mode';
// import DarkModeToggle from "react-dark-mode-toggle";
// import MenuIcon from '@mui/icons-material/MenuIcon';
// import DarkMode from '@mui/icons-material/DarkMode';
import styled, {keyframes} from 'styled-components';
import stars from './stars.png';


export default function SunMoon ({darkMode}) {
    // const darkMode = useDarkMode(false);

  return (
    <>
        {darkMode.value ? <Stars><Moon/></Stars> : <><Sun /><Cloud/></>}
    </>
  );
};

const Cloud = styled.div`
    background-color: white;
    height: 30px;
    width: 30px;
`;

const Stars = styled.div`
    background-image: url(${stars});
    height: 30vh;
    opacity: 0.5;
    width: 100vw;
`;




const PlanetEnter = keyframes`
0% {top: 50%; left: -100%}
100% {top: 5%; left: 0}
`;

const Moon = styled.div`
position: absolute;
// margin: auto;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
width: 100px;
height: 100px;
// background-color: transparent;
border-radius: 50%;
box-shadow: 25px 10px 0px 0px #fff; 
animation-name: ${PlanetEnter};
animation-duration: 2s;
animation-fill-mode: forwards;
// animation-iteration-count: infinite;
`;


const Sun = styled.div`
margin-left: 25px;
position: absolute;
width: 100px;
height: 100px;
background-color: #ffec8c;
border-radius: 50%;
animation-name: ${PlanetEnter};
animation-duration: 2s;
animation-fill-mode: forwards;
`;