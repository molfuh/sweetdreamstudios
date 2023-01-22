import React from 'react';
import styled, {keyframes} from 'styled-components';
// import SDSLogoImg from './Sweet_Dream_Studios_Final20.png';
// import LogoBg from './Background.png';
// import BigStar from './Bigstar.png';


export default function Mission ({darkMode}) {
  return (
    <>
    <MissionStatement>
      Hello
    </MissionStatement>
    {/* {darkMode.value ?
      <SweetDreamStudiosWrapperDark>
        <SweetDreamStudiosDark>Sweet Dream Studios</SweetDreamStudiosDark>
        <Logo>
          <SDSLogo src={LogoBg}/>
          <BigShootingStar src={BigStar}/>
        </Logo>
      </SweetDreamStudiosWrapperDark>
    :
    <SweetDreamStudiosWrapper>
      <SweetDreamStudios>Sweet Dream Studios</SweetDreamStudios>
      <LogoDark>
          <SDSLogo src={LogoBg}/>
          <BigShootingStar src={BigStar}/>
        </LogoDark>
      </SweetDreamStudiosWrapper>
    } */}
    </>
  );
};

const MissionStatement = styled.span`
  z-index: 1;
`;

// const Logo = styled.div`
//   position: relative;
//   width: 50vw;
//   display: flex;
//   align-items: center;
//   max-width: 450px;
//   max-height: 425px;
//   mix-blend-mode: lighten;
// `;

// const LogoDark = styled(Logo)`
//   mix-blend-mode: normal;
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
// animation-name: ${BigShootingStarAnimation};
// animation-duration: 3s;
// animation-delay: 1s;
// width: 100%;
// margin-left: -20px;
// animation-fill-mode: backwards;
// `;

// const SDSLogo = styled.img`
//   height: 45vw;
//   /* margin-left: -40px; */
//   // width: 50vw;
//   max-width: 450px;
//   max-height: 425px;
// `;

// const SweetDreamStudiosWrapper = styled.div`
//   user-select: none;
//   width: min-content;
//   color: #0a143dbf;
//   // mix-blend-mode: hard-light;
//   height: 100vh;
//   /* margin: 0 25px; */
//   // z-index: -1;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100vw;
//   // scroll-snap-align: center;
// `;

// const SweetDreamStudiosWrapperDark = styled(SweetDreamStudiosWrapper)`
//   color: #5f4b8a;
//   // mix-blend-mode: difference;
//   // mix-blend-mode: unset;
//   // mix-blend-mode: lighten;
// `;

// // const Intro = styled.div`
// //   position: relative;
// //   font-size: 10vw;
// //   // z-index: 1;
// // `;

// const SweetDreamStudios = styled.div`
//   // position: relative;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -moz-background-clip: text;
//   -moz-text-fill-color: transparent;
//   background-image: linear-gradient(#bc8ae3 33%, #d3b456 66%);
//   font-size: 15vw;
//   width: min-content;
//   @media (min-width: 768px) {
//     font-size: 8em;
//   }
//   // z-index: 1;
// `;

// const SweetDreamStudiosDark = styled(SweetDreamStudios)`
//   // position: relative;
//   // font-size: 15vw;
//   // z-index: 1;
//   // mix-blend-mode: multiply;
// `;