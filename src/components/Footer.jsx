import React from 'react';
// import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import InstagramImg from '../assets/instagramImg.png';
// import TikTokImg from '../assets/tiktokImg.png';
// import FacebookImg from '../assets/facebookImg.png';
// import TwitterImg from '../assets/twitterImg.png';


export default function Footer () {
  return (
    <footer class="z-index-1 width-100 flex align-items-center direction-column position-absolute">
      <span>Follow us to stay up to date on our projects!</span>
      <div class="social-media flex align-items-end">
        <a href="https://www.instagram.com/SweetDreamStudios.vg/" class="instagram" title="instagram" aria-text="instagram link"></a>
        <a href="https://www.tiktok.com/@sweet_dream_studios?lang=en" class="tiktok" title="tiktok" aria-text="tiktok link"></a>
        <a href="https://twitter.com/SweetDreamSTU" class="twitter" title="twitter" aria-text="twitter link"></a>
        <a href="https://www.facebook.com/Sweet-Dream-Studios-104392922407390" class="facebook" title="facebook" aria-text="facebook link"></a>
      </div>
    </footer>
  )
}
