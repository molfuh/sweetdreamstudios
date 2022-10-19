import React from 'react';
// import useDarkMode from 'use-dark-mode';
// import DarkModeToggle from "react-dark-mode-toggle";
// import MenuIcon from '@mui/icons-material/MenuIcon';
// import DarkMode from '@mui/icons-material/DarkMode';
import styled, {keyframes} from 'styled-components';
import stars from './stars.png';


export default function SunMoon ({darkMode}) {
    // const darkMode = useDarkMode(false);

  return (
    <>
        {darkMode.value ? <><Stars/><Moon/></> : <><Cloud /><Cloud2/><Cloud3/><Sun /></>}
    </>
  );
};


// const Cloud = styled.div`
//     background-color: white;
//     height: 30px;
//     width: 30px;
// `;


const CloudsScroll = keyframes`
  0% {transform:  translate(-350px,0);}
  100% {transform:  translate(100vw,0);}
`;

const Stars = styled.div`
    background-image: url(${stars});
    height: 30vh;
    width: 100vw;
    position: relative;
`;

const Cloud = styled.div`
    /* background-image: url(${stars}); */
    /* height: 30vh;
    width: 20vw;
    position: relative;
    background-color: white;
    position: absolute; */
    width: 350px;
    height: 120px;
    background: white;
    border-radius: 100px;
    position: absolute;
    margin: 320px auto 20px;
    animation-name: ${CloudsScroll};
animation-duration: 60s;
animation-delay: 2s;
animation-fill-mode: backwards;
animation-iteration-count: infinite;
animation-timing-function: linear;
    &:after {
      width: 100px;
      height: 100px;
	    top: -50px;
      left: 50px;
      border-radius: 100px;
    }
    &:before {
      width: 180px;
      height: 180px;
	    top: -90px;
      right: 50px;
	    border-radius: 200px;
    }
    &:after, &:before {
      content: '';
      position: absolute;
      background: white;
      z-index: -1
    }
`;

const Cloud2 = styled(Cloud)`
  /* animation-delay: 3s; */
  top: 100px;
  animation-direction: reverse;
  animation-delay: 10s;
`

const Cloud3 = styled(Cloud)`
    top: 75px;
    animation-delay: 20s;
`



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
