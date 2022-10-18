import React from 'react';
import useDarkMode from 'use-dark-mode';
// import DarkModeToggle from "react-dark-mode-toggle";
import Toggle from './Toggle.jsx';

export default function DarkModeToggleFunc () {
    const darkMode = useDarkMode(false);
      return (
        <div>
          <button type="button" onClick={darkMode.disable}>
            ☀
          </button>
          <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
          <button type="button" onClick={darkMode.enable}>
            ☾
          </button>
        </div>
      );
  };
  
  // export default DarkModeToggleFunc;