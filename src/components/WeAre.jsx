import React, { useEffect } from 'react';
// import styled, {keyframes} from 'styled-components';
// import SDSLogoImg from '../assets/Sweet_Dream_Studios_Final20.png';
// import LogoBg from './Background.png';
// import BigStar from './Bigstar.png';


export default function WeAre () {
  // useEffect(() => {
  //   const imagesPreload = [LogoBgWithNoStars, LogoBgWithStars, StarWithTail ];
  //   imagesPreload.forEach((image) => {
  //     const newImage = new Image();
  //     newImage.src=image;
  //     window[image] = newImage;
  //   })
  // }, [])
  // componentDidMount() {
  //   const imagesPreload = [LogoBgWithNoStars, LogoBgWithStars, StarWithTail ];
  //   imagesPreload.forEach((image) => {
  //     const newImage = new Image();
  //     newImage.src=image;
  //     window[image] = newImage;
  //   })
  // }
  return (
    <div class="hero-wrapper flex align-items-center justify-content-center z-index-1 width-100 height-100">
      <h1 class="z-index-1 hero-text">Sweet Dream Studios</h1>
      <div class="hero-image--wrapper position-relative flex align-items-center justify-content-center">
        <img class="img--main-logo" alt="main logo"/>
        <img class="img--shooting-star position-absolute width-100" alt="shooting star"/>
      </div>
    </div>
  );
};
