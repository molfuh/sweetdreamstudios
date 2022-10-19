import React from 'react';
// import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkModeToggleFunc ({darkMode}) {
  // const darkMode = useDarkMode(false);
  // const darkMode = useDarkMode(false, {
  //   onChange: turnDarkMode
  // });
  // function turnDarkMode() {
  //   console.log('logged!');
  // }
  return (
    <div>
      {/* <button type="button" onClick={darkMode.disable}>
        ☀
      </button> */}
      <DarkModeToggle checked={darkMode.value} onChange={darkMode.toggle} className="darkModeToggle"/>
      {/* <button type="button" onClick={darkMode.enable}>
        ☾
      </button> */}
    </div>
  );
};