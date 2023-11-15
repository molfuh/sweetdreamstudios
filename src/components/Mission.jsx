import React from 'react';
import styled, {keyframes} from 'styled-components';
// import SDSLogoImg from './Sweet_Dream_Studios_Final20.png';
// import LogoBg from './Background.png';
import InstagramImg from '../assets/instagramImg.png';
import TikTokImg from '../assets/tiktokImg.png';
import FacebookImg from '../assets/facebookImg.png';
import TwitterImg from '../assets/twitterImg.png';


export default function Mission ({darkMode}) {
  return (
    <>
    {darkMode.value ?
    <>
    <MissionStatement>
      We are Sweet Dream Studios!
    </MissionStatement>
      {/* <SocialMediaTitle>Follow us to stay up to date on our projects: */}
{/* </SocialMediaTitle> */}
    {/* <SocialMedia> */}

    {/* <a href="https://www.instagram.com/SweetDreamStudios.vg/">Instagram</a>
    <a href="https://twitter.com/SweetDreamSTU">Twitter</a>
    <a href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390">Facebook</a>
    <a href="https://www.tiktok.com/@sweet_dream_studios?lang=en">TikTok</a> */}
      {/* <InstagramCloud>
        <a href="https://www.instagram.com/SweetDreamStudios.vg/">Instagram</a>
      </InstagramCloud> */}
          {/* <InstagramLinkDark target="_blank" href="https://www.instagram.com/SweetDreamStudios.vg/" />
    <TikTokLinkDark target="_blank" href="https://www.tiktok.com/@sweet_dream_studios?lang=en" />
    <TwitterLinkDark target="_blank" href="https://twitter.com/SweetDreamSTU" />
    <FacebookLinkDark target="_blank" href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390" /> */}

    {/* </SocialMedia> */}
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
    :
    <>
    <MissionStatement>
    We are Sweet Dream Studios!
  </MissionStatement>
    {/* <SocialMediaTitle>Follow us to stay up to date on our projects: */}
{/* </SocialMediaTitle> */}
  {/* <SocialMedia> */}

  {/* <a href="https://www.instagram.com/SweetDreamStudios.vg/">Instagram</a>
  <a href="https://twitter.com/SweetDreamSTU">Twitter</a>
  <a href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390">Facebook</a>
  <a href="https://www.tiktok.com/@sweet_dream_studios?lang=en">TikTok</a> */}
    {/* <InstagramCloud>
      <a href="https://www.instagram.com/SweetDreamStudios.vg/">Instagram</a>
    </InstagramCloud> */}
      {/* <InstagramLink target="_blank" href="https://www.instagram.com/SweetDreamStudios.vg/" />
      <TikTokLink target="_blank" href="https://www.tiktok.com/@sweet_dream_studios?lang=en" />
      <TwitterLink target="_blank" href="https://twitter.com/SweetDreamSTU" />
      <FacebookLink target="_blank" href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390" /> */}
  {/* </SocialMedia> */}
    </>
  }
  </>
  );
};

const SocialMedia = styled.div`
  display:flex;
  position: relative;
  // top: 70%;
  height: 100%;
  align-items:flex-end;
  // justify-content: center;
  margin-bottom: 1em;
  margin-left: 5em;
`;

const LinkStyle = styled.a`
  background-size: contain !important;
  background-repeat: no-repeat !important;
  cursor: pointer;
  height: 120px;
  width: 170px;
  margin: 10px;
`;

const LinkStyleDark = styled(LinkStyle)`
  filter: invert(1);
`;

const InstagramLinkDark= styled(LinkStyleDark)`
  background: url(${InstagramImg});
`;

const TikTokLinkDark= styled(LinkStyleDark)`
  background: url(${TikTokImg});
`;

const TwitterLinkDark= styled(LinkStyleDark)`
  background: url(${TwitterImg});
`;

const FacebookLinkDark= styled(LinkStyleDark)`
  background: url(${FacebookImg});
`;


const InstagramLink = styled(LinkStyle)`
  background: url(${InstagramImg});
`;

const FacebookLink = styled(LinkStyle)`
  background: url(${FacebookImg});
`;

const TikTokLink = styled(LinkStyle)`
  background: url(${TikTokImg});
`;

const TwitterLink = styled(LinkStyle)`
  background: url(${TwitterImg});
`;

const CloudLink = styled.a`
  border: none;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 120px;
  width: 170px;
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
`;

const CloudLinkInstagram = styled(CloudLink)`

`;

const MissionStatement = styled.h2`
z-index: 1;
position: absolute;
font-size: 4em;
// margin-top: 5em;
font-weight: 400;
margin: 5em 1em;
`;

const SocialMediaTitle = styled(MissionStatement)`
  // position: absolute;
  // z-index: 1;
  // margin-top: 7.5em;
  margin-top: 7em;
  // font-size: 2.5em;
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
// animation-name: large-shooting-stars
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