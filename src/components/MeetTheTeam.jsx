import React from 'react';
import styled from 'styled-components';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import Home from './Home.jsx';
import JaredImg from '../headshots/Jared.png';
import StevenImg from '../headshots/Steven.png';
import LauraImg from '../headshots/Laura.png';
import ThomasImg from '../headshots/Thomas.png';
import MollyImg from '../headshots/Molly.png';
import AndyImg from '../headshots/Andy.jpg';
import PaulinaImg from '../headshots/Paulina.jpg';
import KedricImg from '../headshots/Kedric.jpg';
import MattImg from '../headshots/Matt.jpg';
// ({darkMode})
export default class MeetTheTeam extends React.Component {
  constructor() {
    super();
  this.state = {
    Pictures: [JaredImg,StevenImg, LauraImg, ThomasImg, MollyImg,AndyImg,PaulinaImg,KedricImg,MattImg],
    People: {
      Paulina: {
        Name: 'Paulina Ramirez',
        Pronouns: 'She/Her',
        Role: 'CEO / Video Game Director',
        Photo: PaulinaImg
      },
      Steven: {
        Name: 'Steven Carrasquel',
        Pronouns: 'He/Him',
        Role: 'COO / Director of Marketing',
        Photo: StevenImg
      },
      Kedric: {
        Name: 'Kedric Tayag',
        Pronouns: 'He/Him',
        Role: 'Game Artist',
        Photo: KedricImg
      },
      Laura: {
        Name: 'Laura Willoughby',
        Pronouns: 'She/Her',
        Role: 'Graphic Designer',
        Photo: LauraImg
      },
      Andy: {
        Name: 'Andy Clark',
        Pronouns: 'He/Him',
        Role: 'Music Director',
        Photo: AndyImg
      },
      Thomas: {
        Name: 'Thomas Ravago',
        Pronouns: 'He/Him',
        Role: 'Music Composer',
        Photo: ThomasImg
      },
      Molly: {
        Name: 'Molly Fuhrman',
        Pronouns: 'She/Her',
        Role: 'Website / Game Developer',
        Photo: MollyImg
      },
      Jared: {
        Name: 'Jared Keffer',
        Pronouns: 'He/Him',
        Role: 'Game Developer',
        Photo: JaredImg
      },
      Matt: {
        Name: 'Matt Breuer',
        Pronouns: 'He/Him',
        Role: 'Writer',
        Photo: MattImg
      }
    }
  }
}
  componentDidMount = () => {
    this.state.Pictures.forEach((picture) => {
        const img = new Image();
        img.src = picture.fileName;
    })};
//   let projectTitles=['INT Magazine','Meditative Musical Drum','Positively TEDIOUS','Resume','title 4','title 5'];
// let projectTitlesList=[];
// projectTitles.forEach((title,index)=>{
//     projectTitlesList.push( <Num key={index}><span>{title}</span></Num>)
// })
// let projectDescription=['Online magazine highlighting creative themes and topics',
// 'Minimum viable product for phone app to create self-designed meditative music (mobile only)','Portfolio website for new musician TEDIOUS to showcase important artist information','(Includes hidden surprise behind draggable logo!)','description 4','description 5'];
// let projectDescriptionList=[];
// projectDescription.forEach((description,index)=>{
//     projectDescriptionList.push( <Num key={index}><span>{description}</span></Num>)
// })
// let projectURL=['https://www.intmagazine.com/',
// 'https://meditativemusicaldrum.netlify.app/','https://positivelytedious.com/',Resume,'URL 4','URL 5'];
// let projectURLList=[];
// projectURL.forEach((URL,index)=>{
//     projectURLList.push( <Num key={index}><ProjectLink href={URL} target="_blank" rel="noreferrer">Click here to view!</ProjectLink></Num>)
// })
// function ProjectListComponent() {
//   return (
//     <>
//       <ListContainer>
//         <Num>
//             <Title>{' // Projects ' }</Title>
//         </Num>
//         <Num/>
//         {projectTitlesList[0]}
//         {projectDescriptionList[0]}
//         {projectURLList[0]}
//         <Num/>
//         {projectTitlesList[2]}
//         {projectDescriptionList[2]}
//         {projectDescriptionList[3]}
//         {projectURLList[2]}
//         <Num/>
//         {projectTitlesList[1]}
//         {projectDescriptionList[1]}
//         {projectURLList[1]}
//         <Num/>
//         {projectTitlesList[3]}
//         {projectURLList[3]}
//         <Num/>
//       </ListContainer>


render() {
  return (
    <>
  {this.props.darkMode.value ? 
  <>
      <DarkModeToggleFunc darkMode={this.props.darkMode}/>
      <SunMoon darkMode={this.props.darkMode}/>
      <MeetOurStarsTitleWrapper>
        <MeetOurStarsTitleDark>Meet Our Stars</MeetOurStarsTitleDark>
      </MeetOurStarsTitleWrapper>
      <PhotoGalleryWrapper>
      <PhotoGallery>
        <TeamMemberWrapper>
      <PhotoImgWrapper>
        <PhotoImgDark src={this.state.People.Paulina.Photo}/>
          <AboutMe>
          {this.state.People.Paulina.Name} <br/> {this.state.People.Paulina.Pronouns} <br/> {this.state.People.Paulina.Role}
          </AboutMe>
        </PhotoImgWrapper>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
        <PhotoImgWrapper>
        <PhotoImgDark src={this.state.People.Steven.Photo}/>
          <AboutMe>
          {this.state.People.Steven.Name} <br/> {this.state.People.Steven.Pronouns} <br/> {this.state.People.Steven.Role}
          </AboutMe>
        </PhotoImgWrapper>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
        <PhotoImgWrapper>
        <PhotoImgDark src={this.state.People.Kedric.Photo}/>
          <AboutMe>
          {this.state.People.Kedric.Name} <br/> {this.state.People.Kedric.Pronouns} <br/> {this.state.People.Kedric.Role}
          </AboutMe>
        </PhotoImgWrapper>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
        <PhotoImgWrapper>
                <PhotoImgDark src={this.state.People.Laura.Photo}/>
                <AboutMe>
                {this.state.People.Laura.Name} <br/> {this.state.People.Laura.Pronouns} <br/> {this.state.People.Laura.Role}
                </AboutMe>
              </PhotoImgWrapper>
              </TeamMemberWrapper>
              <TeamMemberWrapper>
              <PhotoImgWrapper>
              <PhotoImgDark src={this.state.People.Andy.Photo}/>
              <AboutMe>
              {this.state.People.Andy.Name} <br/> {this.state.People.Andy.Pronouns} <br/> {this.state.People.Andy.Role}
              </AboutMe>
            </PhotoImgWrapper>
            </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImgDark src={this.state.People.Thomas.Photo}/>
            <AboutMe>
            {this.state.People.Thomas.Name} <br/> {this.state.People.Thomas.Pronouns} <br/> {this.state.People.Thomas.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImgDark src={this.state.People.Molly.Photo}/>
            <AboutMe>
            {this.state.People.Molly.Name} <br/> {this.state.People.Molly.Pronouns} <br/> {this.state.People.Molly.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImgDark src={this.state.People.Jared.Photo}/>
            <AboutMe>
            {this.state.People.Jared.Name} <br/> {this.state.People.Jared.Pronouns} <br/> {this.state.People.Jared.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImgDark src={this.state.People.Matt.Photo}/>
            <AboutMe>
            {this.state.People.Matt.Name} <br/> {this.state.People.Matt.Pronouns} <br/> {this.state.People.Matt.Role}
            </AboutMe>
            {/* </PhotoImgDark> */}
          </PhotoImgWrapper>
          </TeamMemberWrapper>
      </PhotoGallery>
      </PhotoGalleryWrapper>
      </>
    :
    <>
    <DarkModeToggleFunc darkMode={this.props.darkMode}/>
    <SunMoon darkMode={this.props.darkMode}/>
    <MeetOurStarsTitleWrapper>
      <MeetOurStarsTitle>Meet Our Stars</MeetOurStarsTitle>
    </MeetOurStarsTitleWrapper>
    <PhotoGalleryWrapper>
    <PhotoGallery>
        <TeamMemberWrapper>
      <PhotoImgWrapper>
        <PhotoImg src={this.state.People.Paulina.Photo}/>
          <AboutMe>
          {this.state.People.Paulina.Name} <br/> {this.state.People.Paulina.Pronouns} <br/> {this.state.People.Paulina.Role}
          </AboutMe>
        </PhotoImgWrapper>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
        <PhotoImgWrapper>
        <PhotoImg src={this.state.People.Steven.Photo}/>
          <AboutMe>
          {this.state.People.Steven.Name} <br/> {this.state.People.Steven.Pronouns} <br/> {this.state.People.Steven.Role}
          </AboutMe>
        </PhotoImgWrapper>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
        <PhotoImgWrapper>
        <PhotoImg src={this.state.People.Kedric.Photo}/>
          <AboutMe>
          {this.state.People.Kedric.Name} <br/> {this.state.People.Kedric.Pronouns} <br/> {this.state.People.Kedric.Role}
          </AboutMe>
        </PhotoImgWrapper>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
        <PhotoImgWrapper>
                <PhotoImg src={this.state.People.Laura.Photo}/>
                <AboutMe>
                {this.state.People.Laura.Name} <br/> {this.state.People.Laura.Pronouns} <br/> {this.state.People.Laura.Role}
                </AboutMe>
              </PhotoImgWrapper>
              </TeamMemberWrapper>
              <TeamMemberWrapper>
              <PhotoImgWrapper>
              <PhotoImg src={this.state.People.Andy.Photo}/>
              <AboutMe>
              {this.state.People.Andy.Name} <br/> {this.state.People.Andy.Pronouns} <br/> {this.state.People.Andy.Role}
              </AboutMe>
            </PhotoImgWrapper>
            </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImg src={this.state.People.Thomas.Photo}/>
            <AboutMe>
            {this.state.People.Thomas.Name} <br/> {this.state.People.Thomas.Pronouns} <br/> {this.state.People.Thomas.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImg src={this.state.People.Molly.Photo}/>
            <AboutMe>
            {this.state.People.Molly.Name} <br/> {this.state.People.Molly.Pronouns} <br/> {this.state.People.Molly.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImg src={this.state.People.Jared.Photo}/>
            <AboutMe>
            {this.state.People.Jared.Name} <br/> {this.state.People.Jared.Pronouns} <br/> {this.state.People.Jared.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
            <TeamMemberWrapper>
            <PhotoImgWrapper>
            <PhotoImg/>
            <AboutMe>
            {this.state.People.Matt.Name} <br/> {this.state.People.Matt.Pronouns} <br/> {this.state.People.Matt.Role}
            </AboutMe>
          </PhotoImgWrapper>
          </TeamMemberWrapper>
      </PhotoGallery>
      {/*
      <TeamMemberWrapper>
      <PhotoImgWrapper>
      <PhotoImg src={StevenImg}/>
        <AboutMe>
        Steven Carrasquel <br/> He/Him <br/> COO / Director of Marketing
        </AboutMe>
      </PhotoImgWrapper>
      </TeamMemberWrapper>
      <PhotoImgWrapper>
      <PhotoImg src={LauraImg}/>
        <AboutMe>
        Laura Willoughby <br/> She/Her <br/> Graphic Designer
        </AboutMe>
      </PhotoImgWrapper>
      <PhotoImgWrapper>
        <PhotoImg src={ThomasImg}/>
          <AboutMe>
          Thomas Ravago <br/> He/Him <br/> Music Composer
          </AboutMe>
        </PhotoImgWrapper>
        <PhotoImgWrapper>
        <PhotoImg src={MollyImg}/>
          <AboutMe>
          Molly Fuhrman <br/> She/Her <br/> Game / Website Developer
          </AboutMe>
        </PhotoImgWrapper> */}
    {/* </PhotoGallery> */}
    </PhotoGalleryWrapper>
    </>
}
    </>
  );
}
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
    // font-size: 15vw;
    font-size: 7.5em;
    /* z-index: 8; */
    position: relative;
    font-weight: 400;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // -moz-background-clip: text;
    // background-image: linear-gradient(#d3b456 33%, #bc8ae3 66%);
    color: #d3b456;
        -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
        background-image: linear-gradient(#bc8ae3 33%,#d3b456 66%);
}

  @media (min-width: 768px) {
    font-size: 8em;
  }
  // z-index: 1;
`;

const MeetOurStarsTitleDark = styled(MeetOurStarsTitle)`
  // background-image: linear-gradient(#bc8ae3 33%, #d3b456 66%);
  color: #bc8ae3;
  `;

  const PhotoGalleryWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;

const PhotoGallery = styled.div`
// max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1.5em;
}
`;

const TeamMemberWrapper = styled.div`
// width: 33%;
width: 275px;
// height: 40%;
display: flex;
justify-content: center;
`;
// .TeamMemberWrapper:not(.TeamMemberWrapper:nth-child(3), TeamMemberWrapper:nth-child(4), .TeamMemberWrapper:nth-child(5), TeamMemberWrapper:nth-child(6)) {
//   flex: 33%;
// }

// .TeamMemberWrapper:nth-child(3), TeamMemberWrapper:nth-child(4), .TeamMemberWrapper:nth-child(5), TeamMemberWrapper:nth-child(6) {
//   flex: 25%;
// }

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
font-size: 1.5em;
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