import React from 'react';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="p-2">
      {theme === 'dark' ? (
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={toggleTheme}
        >
          <span>Lightmode </span>
          <Icon icon="akar-icons:sun" />
        </div>
      ) : (
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={toggleTheme}
        >
          <span> Darkmode</span>
          <Icon icon="bi:moon-fill" />
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
