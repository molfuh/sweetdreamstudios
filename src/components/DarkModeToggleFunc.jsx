import React from 'react';
import useDarkMode from 'use-dark-mode';
// import DarkModeToggle from "react-dark-mode-toggle";
// import Toggle from './Toggle.jsx';
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkModeToggleFunc () {
    const darkMode = useDarkMode(false);
      return (
        <div>
          <button type="button" onClick={darkMode.disable}>
            ☀
          </button>
          <DarkModeToggle checked={darkMode.value} onChange={darkMode.toggle} />
          <button type="button" onClick={darkMode.enable}>
            ☾
          </button>
        </div>
      );
  };
  
  // export default DarkModeToggleFunc;