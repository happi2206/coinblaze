import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Header from '../components/Header';
const Portfolio = () => {
  return (
    <div className="px-5 py-8 border-t border-gray-400 rounded-none md:px-10 lg:px-24">
      <div className="flex items-center space-x-2 text-sm font-semibold">
        <NavLink to="/" className="cursor-pointer text-accent">
          Home
        </NavLink>
        <Icon icon="ep:arrow-right-bold" width={12} />
        <span className="text-gray-800 dark:text-gray-400">Portfolio</span>
      </div>
      <Header />
    </div>
  );
};

export default Portfolio;
