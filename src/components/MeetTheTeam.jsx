import React from 'react';
import styled from 'styled-components';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import Home from './Home.jsx';
import Photo1 from './Jared.png';
import Photo2 from './Steven.png';
import Photo3 from './Laura.png';
import Photo4 from './Thomas.png';
import Photo5 from './Molly.png';

export default function MeetTheTeam ({darkMode}) {
  return (
    <>
  {darkMode.value ? 
  <>
      <DarkModeToggleFunc darkMode={darkMode}/>
      <SunMoon darkMode={darkMode}/>
      <MeetOurStarsTitleWrapper>
        <MeetOurStarsTitleDark>Meet Our Stars</MeetOurStarsTitleDark>
      </MeetOurStarsTitleWrapper>
      <PhotoGallery>
        <PhotoImgWrapper>
        <PhotoImgDark src={Photo1}/>
          <AboutMe>
          Jared Keffer <br/> He/Him <br/> Game Developer
          </AboutMe>
        </PhotoImgWrapper>
        <PhotoImgWrapper>
        <PhotoImgDark src={Photo2}/>
          <AboutMe>
          Steven Carrasquel <br/> He/Him <br/> COO / Director of Marketing
          </AboutMe>
        </PhotoImgWrapper>
        <PhotoImgWrapper>
        <PhotoImgDark src={Photo3}/>
          <AboutMe>
          Laura Willoughby <br/> She/Her <br/> Graphic Designer
          </AboutMe>
        </PhotoImgWrapper>
        <PhotoImgWrapper>
        <PhotoImgDark src={Photo4}/>
          <AboutMe>
          Thomas Ravago <br/> He/Him <br/> Composer / Sound Designer
          </AboutMe>
        </PhotoImgWrapper>
        <PhotoImgWrapper>
        <PhotoImgDark src={Photo5}/>
          <AboutMe>
          Molly Fuhrman <br/> She/Her <br/> Game Developer
          </AboutMe>
        </PhotoImgWrapper>
      </PhotoGallery>
      </>
    :
    <>
    <DarkModeToggleFunc darkMode={darkMode}/>
    <SunMoon darkMode={darkMode}/>
    <MeetOurStarsTitleWrapper>
      <MeetOurStarsTitle>Meet Our Stars</MeetOurStarsTitle>
    </MeetOurStarsTitleWrapper>
    <PhotoGallery>
      <PhotoImgWrapper>
      <PhotoImg src={Photo1}/>
        <AboutMe>
        Jared Keffer <br/> He/Him <br/> Game Developer
        </AboutMe>
      </PhotoImgWrapper>
      <PhotoImgWrapper>
      <PhotoImg src={Photo2}/>
        <AboutMe>
        Steven Carrasquel <br/> He/Him <br/> COO / Director of Marketing
        </AboutMe>
      </PhotoImgWrapper>
      <PhotoImgWrapper>
      <PhotoImg src={Photo3}/>
        <AboutMe>
        Laura Willoughby <br/> She/Her <br/> Graphic Designer
        </AboutMe>
      </PhotoImgWrapper>
      <PhotoImgWrapper>
        <PhotoImg src={Photo4}/>
          <AboutMe>
          Thomas Ravago <br/> He/Him <br/> Composer / Sound Designer
          </AboutMe>
        </PhotoImgWrapper>
        <PhotoImgWrapper>
        <PhotoImg src={Photo5}/>
          <AboutMe>
          Molly Fuhrman <br/> She/Her <br/> Game Developer
          </AboutMe>
        </PhotoImgWrapper>
    </PhotoGallery>
    </>
}
    </>
  );
};


// {/* <DarkModeToggleFunc darkMode={darkMode}/>
// <FixedPosition>
//   {/* <Header darkMode={darkMode}/> */}
//   <SunMoon darkMode={darkMode}/>
// </FixedPosition> */}

// const MeetOurStarsTitleWrapper = styled.div`
//   display: flex;
// `;

const MeetOurStarsTitleWrapper = styled.div`
  user-select: none;
  // width: min-content;
  // color: #0a143dbf;
  // mix-blend-mode: hard-light;
  // height: 100vh;
  /* margin: 0 25px; */
  // z-index: -1;
  // position: absolute;
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
  width: 100vw;
  // scroll-snap-align: center;
`;

const MeetOurStarsTitle = styled.h1`
    user-select: none;
    // width: min-content;
    // height: 100vh;
    // position: absolute;
    display: flex;
    margin: 0;
    width: auto;
    display: flex;
    // width: 100vw;
    font-weight: 400;
    font-size: 15vw;
    /* z-index: 8; */
    position: relative;
    font-weight: 400;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // -moz-background-clip: text;
    // background-image: linear-gradient(#d3b456 33%, #bc8ae3 66%);
    color: #d3b456;

  @media (min-width: 768px) {
    font-size: 8em;
  }
  // z-index: 1;
`;

const MeetOurStarsTitleDark = styled(MeetOurStarsTitle)`
  // background-image: linear-gradient(#bc8ae3 33%, #d3b456 66%);
  color: #bc8ae3;
  `;

const PhotoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1.5em;
}
`;

const PhotoImgWrapper = styled.div`
position: relative;
/* overflow: hidden; */
// padding-bottom: 20%;
height: 250px;
width: 200px;
// height: 250px;
// padding: 0.5em;
// background-color: #d3b456;
border-radius: 50%;
display: flex;

justify-content: center;
align-items: center;
border: 6px solid #d3b456;
// transition: backdrop-filter 1s;
z-index:1;
transition: opacity 0.2s, backdrop-filter 0.1s;
&:hover div {
  opacity: 1;
  backdrop-filter: blur(6px);
}
`;

const AboutMe = styled.div`
position: absolute;
text-align: center;
border-radius: 50%;
// max-width: 200px;
/* background-color: black; */
-webkit-transition: opacity 0.3s;
transition: opacity 0.3s;
/* filter: blur(10px); */
display: flex;
opacity:0;
// height: 36%;
user-select: none;
align-items: center;
// width: 100%;
width: 200px;
height: 250px;
justify-content: center;
color: white;
transition: opacity 0.2s, backdrop-filter 0.1s;
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // height: 100%;
`;



const PhotoImg = styled.img`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
// width: 200px;
// height: 250px;
border-radius: 50%;
// object-fit: cover;
z-index: 0;
transition: filter 0.5s;
&:hover {
  // filter: unset;
  // backdrop-filter: blur(6px);
  filter: blur(6px);
}
`;


const PhotoImgDark = styled(PhotoImg)`
-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
filter: grayscale(100%);
`;


// const Photo1Img = styled(PhotoImg)`
//   // background-image: src()
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