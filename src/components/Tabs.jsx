import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
const navLinkStyles = ({ isActive }) => {
  return {
    boxShadow: isActive && 'inset  0 -4px 2px -2px #8dc547',
    color: isActive && '#fff',
  };
};
const Tabs = () => {
  const tabs = [
    {
      title: 'Portfolio',
      path: 'portfolio',
      isPortfolio: true,
    },
    {
      title: 'Coins',
      path: '/',
    },
    {
      title: 'New Coins',
      path: 'new-coins',
    },
    {
      title: 'Trending',
      path: 'trending',
    },
    {
      title: 'NFT',
      path: 'nft',
    },
  ];
  return (
    <div className="container">
      <div className="flex pt-5 space-x-8 overflow-x-auto text-gray-800 dark:text-gray-400 lg:space-x-14 lg:text-base">
        {tabs.map((tab, i) => (
          <NavLink
            to={tab.path}
            end={true}
            style={navLinkStyles}
            key={i}
            className="flex items-center pb-1 text-sm font-semibold"
          >
            {tab.isPortfolio && (
              <span className="pr-2">
                <Icon icon="twemoji:star" width={10} />
              </span>
            )}

            {tab.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
