import React from 'react';
import styled from 'styled-components';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import Home from './Home.jsx';
import Photo1 from './Jared.png';
import Photo2 from './Steven.png';
import Photo3 from './Laura.png';

export default function MeetTheTeam ({darkMode}) {
  return (
    <>
  {darkMode.value ? 
  <>
      <DarkModeToggleFunc darkMode={darkMode}/>
      <SunMoon darkMode={darkMode}/>
      <MeetOurStarsTitle>Meet Our Stars</MeetOurStarsTitle>
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
      </PhotoGallery>
      </>
    :
    <>
    <DarkModeToggleFunc darkMode={darkMode}/>
    <SunMoon darkMode={darkMode}/>
    <MeetOurStarsTitle>Meet Our Stars</MeetOurStarsTitle>
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

const MeetOurStarsTitle = styled.h1`
    user-select: none;
    width: min-content;
    // height: 100vh;
    // position: absolute;
    display: flex;
    width: 100vw;
    font-weight: 400;
  @media (min-width: 768px) {
    font-size: 8em;
  }
  // z-index: 1;
`;

const PhotoGallery = styled.div`
  display: flex;
  justify-content: space-around;
}
`;

const PhotoImgWrapper = styled.div`
max-width: 220px;
max-height: 265px;
padding: 0.5em;
background-color: #d3b456;
border-radius: 50%;
display: flex;
align-items: center;
&:hover div {
  opacity: 1;
  backdrop-filter: blur(6px);
`;

const AboutMe = styled.div`
position: absolute;
text-align: center;
border-radius: 50%;
max-width: 200px;
/* background-color: black; */
-webkit-transition: opacity 0.3s;
transition: opacity 0.3s;
/* filter: blur(10px); */
display: flex;
opacity:0;
height: 36%;
align-items: center;
width: 100%;
justify-content: center;
color: white;
transition: opacity 0.3s;
`;



const PhotoImg = styled.img`
width: 200px;
height: 250px;
border-radius: 50%;
object-fit: cover;
transition: filter 0.5s;
&:hover {
  filter: unset;
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