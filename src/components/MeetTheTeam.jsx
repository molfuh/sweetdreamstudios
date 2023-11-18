import React, { useEffect } from 'react';
// import styled from 'styled-components';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
// import Home from './Home.jsx';
import PhotoGallery from './PhotoGallery.jsx';
// import JaredImg from '../headshots/Jared.png';
import StevenImg from '../headshots/Steven.png';
import LauraImg from '../headshots/Laura.png';
import ThomasImg from '../headshots/Thomas.png';
import MollyImg from '../headshots/Molly.png';
import AndyImg from '../headshots/Andy.jpg';
import PaulinaImg from '../headshots/Paulina.jpg';
import KedricImg from '../headshots/Kedric.jpg';
import MattImg from '../headshots/Matt.jpg';
import GuiImg from '../headshots/Gui.jpg';

export default class MeetTheTeam extends React.Component {
  constructor() {
    super();
    this.props = {
      // Pictures: [JaredImg,StevenImg, LauraImg, ThomasImg, MollyImg,AndyImg,PaulinaImg,KedricImg,MattImg,GuiImg],
      People: [
        {
          Name: 'Paulina Ramirez',
          Pronouns: 'She/Her',
          Role: 'CEO / Video Game Director',
          Photo: PaulinaImg
        },
        {
          Name: 'Steven Carrasquel',
          Pronouns: 'He/Him',
          Role: 'COO / Director of Marketing',
          Photo: StevenImg
        },
        {
          Name: 'Kedric Tayag',
          Pronouns: 'He/Him',
          Role: 'Game Artist',
          Photo: KedricImg
        },
        {
          Name: 'Laura Willoughby',
          Pronouns: 'She/Her',
          Role: 'Graphic Designer',
          Photo: LauraImg
        },
        {
          Name: 'Andy Clark',
          Pronouns: 'He/Him',
          Role: 'Music Director',
          Photo: AndyImg
        },
        {
          Name: 'Thomas Ravago',
          Pronouns: 'He/Him',
          Role: 'Music Composer',
          Photo: ThomasImg
        },
        {
          Name: 'Guilherme Nogueira (Gui)',
          Pronouns: 'He/Him',
          Role: 'Music Composer',
          Photo: GuiImg
        },
        {
          Name: 'Molly Fuhrman',
          Pronouns: 'She/Her',
          Role: 'Website Developer',
          Photo: MollyImg
        },
        // Jared: {
        //   Name: 'Jared Keffer',
        //   Pronouns: 'He/Him',
        //   Role: 'Game Developer',
        //   Photo: JaredImg
        // },
        {
          Name: 'Matt Breuer',
          Pronouns: 'He/Him',
          Role: 'Writer',
          Photo: MattImg
        }
    ]
  }
}
  // componentDidMount = () => {
  //   const imagesPreload =this.state.Pictures;
  //   imagesPreload.forEach((image) => {
  //     const newImage = new Image();
  //     newImage.src=image;
  //     window[image] = newImage;
  //   })
  // }



  render() {
    return (
      <>
        <DarkModeToggleFunc darkMode={this.props.darkMode}/>
        <SunMoon darkMode={this.props.darkMode}/>
        <div class="MeetOurStarsTitleWrapper">
          <h1 class="MeetOurStarsTitle">Meet Our Stars</h1>
        </div>
        <div class="flex PhotoGallery">
          <div class="TeamMemberWrapper">
            <PhotoGallery team={this.props.People}></PhotoGallery>
          </div>
        </div>
        {/* </PhotoGalleryWrapper> */}
        </>
    );
  }
}
