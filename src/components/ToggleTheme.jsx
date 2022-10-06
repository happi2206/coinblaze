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
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <Icon icon="akar-icons:sun" />
        ) : (
          <Icon icon="bi:moon-fill" />
        )}
      </div>
    </div>
  );
};

export default ToggleTheme;
