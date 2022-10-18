import React from 'react';
import '../App.css';
import '../index.css';
// import './light.css';
// import './dark.css';
import DarkModeToggleFunc from './DarkModeToggleFunc.jsx';
// import useDarkMode from 'use-dark-mode';

export default function App () {
  // const darkMode = useDarkMode(false);
  return (
    <>
      <DarkModeToggleFunc />
    </>
  );
}