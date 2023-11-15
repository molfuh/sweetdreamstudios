import React from 'react';
// import useDarkMode from 'use-dark-mode';
// import DarkModeToggle from "react-dark-mode-toggle";
// import MenuIcon from '@mui/icons-material/MenuIcon';
// import DarkMode from '@mui/icons-material/DarkMode';
import styled, {keyframes} from 'styled-components';
// import stars from './stars.png';
import stars from '../assets/PossibleStarsBg.png';
import Moon from '../assets/Moon.png';
import BigStar from '../assets/Bigstar.png';


export default function SunMoon ({darkMode}) {
    // const darkMode = useDarkMode(false);
  const random = Math.random();
  return (
    <>
        {
          darkMode.value ?
          <>
          <div class="position-fixed height-100">
            <Stars/>
            <div>
              <ShootingStar1 random={random}/>
              <ShootingStar2/>
              <ShootingStar3/>
            </div>
            <MoonImg src={Moon}/>
            </div>
          </>
          :
          <>
          <div class="position-fixed height-100">
            <Cloud />
            <Cloud2/>
            <Cloud3/>
            <Sun />
            </div>
          </>
        }
    </>
  );
};


// const FixedPosition = styled.div`
// /* top: 12vw; */
// top: 0;
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
// /* scroll-snap-type: y mandatory;
//   overflow-y: scroll;
//   height: 300vh;
//   overflow-x: hidden; */
//   // scroll-snap-points-y: repeat(1zx00vh);
// `;

// // const Cloud = styled.div`
// //     background-color: white;
// //     height: 30px;
// //     width: 30px;
// // `;


// const CloudsScroll = keyframes`
//   0% {transform:  translate(-350px,0);}
//   100% {transform:  translate(100vw,0);}
// `;

 const Stars = styled.div`
     background-image: url(${stars});
     height: 100vh;
     width: 100vw;
     /* position: absolute; */
     /* z-index: -1; */
    background-size: cover;
`;

 const ShootingStar1 = styled.div`
 animation-name: small-shooting-stars;
 animation-duration: 10s;
 border-radius: 50%;
 animation-fill-mode: backwards;
 animation-delay: 3s;
 animation-delay: ${props =>props.random}%;
 animation-iteration-count: infinite;
 width: 2px;
 height:2px;
 position: absolute;
   top: 0;
 background: linear-gradient(to left,#bb91e5 0%,#4047a8 100%);
 `;

 const ShootingStar2 = styled(ShootingStar1)`
   animation-delay: 8s;
   animation-duration: 8s;
   top: 25%;
 `;

 const ShootingStar3 = styled(ShootingStar1)`
 top: 50%;
 animation-delay: 14s;
 animation-duration: 9s;
 `;

 const MoonImg = styled.img`
 position: absolute;
 left: 0;
 top: 0;
 width: 350px;
 height: 350px;
 animation-name: planet-enter;
 animation-duration: 2s;
 animation-fill-mode: forwards;
 `;


 const Cloud = styled.div`
  width: 350px;
  height: 120px;
  background: white;
  border-radius: 100px;
  position: absolute;
  top: 50%;
  animation-name: clouds-scroll;
  animation-duration: 60s;
  animation-direction: reverse;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  box-shadow: 6px 6px 13px 0px #7d7e7ea8;
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
  top: 25%;
  animation-delay: 5s;
  animation-direction: normal;
`

const Cloud3 = styled(Cloud)`
    top: 75%;
    animation-delay: 20s;
`;

const Sun = styled.div`
margin-left: 25px;
position: absolute;
width: 100px;
height: 100px;
background-color: #ffec8c;
border-radius: 50%;
animation-name: planet-enter;
animation-duration: 2s;
animation-fill-mode: forwards;
`;


// const ShootingStars = keyframes`
// // 0% {width: 10px; transform:translateX(0);}
// // 50% {width: 200px;transform:translateX(0);}
// // 100% {width: 10px;transform:translateX(200px);}
// 0%
// {
//     transform: rotate(215deg) translateX(0);
//     opacity: 1;
//     width: 0;
// }
// 70%
// {
//     opacity: 1;
//     width: 200px;
// }
// 100%
// {
//     transform: rotate(215deg) translateX(-200vw);
//     opacity: 0;
//     width: 0;
// }
// `;

// const BigShootingStarAnimation = keyframes`
// 0%
// {
//     transform: translate(100%, -100%);
// }
// 100%
// {
//     transform: translate(0,0);
// }
// `;


// const BigShootingStar = styled.img`
// position: absolute;
// animation-name: large-shooting-stars
// animation-duration: 3s;
// `;

// const ShootingStarsContainer = styled.div`

// `;



