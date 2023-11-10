import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import InstagramImg from '../assets/instagramImg.png';
import TikTokImg from '../assets/tiktokImg.png';
import FacebookImg from '../assets/facebookImg.png';
import TwitterImg from '../assets/twitterImg.png';


export default function Footer ({darkMode}) {
  return (
    <>
    {darkMode.value ? 
    <FooterWrapper>
            Follow us to stay up to date on our projects!
      <SocialMedia>
    <InstagramLinkDark target="_blank" href="https://www.instagram.com/SweetDreamStudios.vg/" />
    <TikTokLinkDark target="_blank" href="https://www.tiktok.com/@sweet_dream_studios?lang=en" />
    <TwitterLinkDark target="_blank" href="https://twitter.com/SweetDreamSTU" />
    <FacebookLinkDark target="_blank" href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390" />
    </SocialMedia>
    </FooterWrapper>
    :
    <FooterWrapper>
      Follow us to stay up to date on our projects!
      <SocialMedia>
    <InstagramLink target="_blank" href="https://www.instagram.com/SweetDreamStudios.vg/" />
<TikTokLink target="_blank" href="https://www.tiktok.com/@sweet_dream_studios?lang=en" />
<TwitterLink target="_blank" href="https://twitter.com/SweetDreamSTU" />
<FacebookLink target="_blank" href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390" />
</SocialMedia>
</FooterWrapper>
    }
</>
);
};

const FooterWrapper = styled.footer`
  backdrop-filter: blur(20px);
  position: absolute;
  bottom:0;
  height: 50px;
  width: 100%;
  margin: 0 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 30px 0;
  font-size: 18px;
`;

const SocialMedia = styled.div`
  display:flex;
  position: relative;
  align-items:flex-end;
  // padding-bottom: 1em;
  margin-top: 10px;
`;

const LinkStyle = styled.a`
  background-size: contain !important;
  background-repeat: no-repeat !important;
  cursor: pointer;
  margin: 0 10px;
  height: 40px;
  width: 40px;
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