import React from 'react';
import '../App.css';
import '../index.css';
// import './light.css';
// import './dark.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
import SunMoon from './SunMoon.jsx';
import useDarkMode from 'use-dark-mode';

export default function App () {
    const darkMode = useDarkMode(true);
  return (
    <>
      <SunMoon darkMode={darkMode}/>
      <DarkModeToggleFunc darkMode={darkMode}/>
    </>
  );
}