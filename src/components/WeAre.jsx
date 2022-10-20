import React from 'react';
import styled, {keyframes} from 'styled-components';
import SDSLogoImg from './Sweet_Dream_Studios_Final20.png';

export default function WeAre ({darkMode}) {
  return (
    <>
    {darkMode.value ? 
      <SweetDreamStudiosWrapperDark>
        {/* <Intro>we are</Intro> */}
        <SweetDreamStudiosDark>Sweet Dream Studios</SweetDreamStudiosDark>
        <SDSLogo src={SDSLogoImg}/>
      </SweetDreamStudiosWrapperDark>
    :
    <SweetDreamStudiosWrapper>
      {/* <Intro>we are</Intro> */}
      <SweetDreamStudios>Sweet Dream Studios</SweetDreamStudios>
      <SDSLogo src={SDSLogoImg}/>
    </SweetDreamStudiosWrapper>
    }
    </>
  );
};

const SDSLogo = styled.img`
  height: 50%;
  margin-left: -40px;
`;

const SweetDreamStudiosWrapper = styled.div`
  user-select: none;
  width: min-content;
  color: #0a143dbf;
  mix-blend-mode: hard-light;
  height: 100vh;
  margin: 0 25px;
  z-index: 0;
  position: absolute;
  display: flex;
  align-items: center;
`;

const SweetDreamStudiosWrapperDark = styled(SweetDreamStudiosWrapper)`
  color: #fff;
  // mix-blend-mode: difference;
  // mix-blend-mode: unset;
  mix-blend-mode: exclusion;
`;

const Intro = styled.div`
  position: relative;
  font-size: 10vw;
  // z-index: 1;
`;

const SweetDreamStudios = styled.div`
  position: relative;
  font-size: 15vw;
  // z-index: 1;
`;

const SweetDreamStudiosDark = styled(SweetDreamStudios)`
  // position: relative;
  // font-size: 15vw;
  // z-index: 1;
  mix-blend-mode: multiply;
`;