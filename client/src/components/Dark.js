import React from 'react';
import { DarkMode } from '../hooks/DarkMode'

const Dark = () => {
  const [darkMode, setDarkMode] = DarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h4 id="try">Try Light Mode?</h4>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Dark;
