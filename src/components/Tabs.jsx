import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import NewCoins from '../views/NewCoins';
import Account from '../views/Account';

const navLinkStyles = ({ isActive }) => {
  return {
    borderBottom: isActive ? '2px solid #000' : 'none',
    fontWeight: isActive ? '600' : '',
  };
};
const Tabs = () => {
  const tabs = [
    {
      title: 'Coins',
      content: <Home />,
      path: '/',
    },
    {
      title: 'Portfolio',
      content: <Portfolio />,
      path: '/portfolio',
    },
    {
      title: 'New Coins',
      content: <NewCoins />,
      path: '/new-coins',
    },
    {
      title: 'Account',
      content: <Account />,
      path: '/account',
    },
  ];
  return (
    <div>
      <div className="flex pt-5 space-x-8 overflow-x-auto text-sm lg:space-x-14 lg:text-base">
        {tabs.map((tab, i) => (
          <NavLink
            to={tab.path}
            end={true}
            style={navLinkStyles}
            key={i}
            className="pb-1"
          >
            {tab.tabTitle}
          </NavLink>
        ))}
      </div>
      <Routes>
        {tabs.map((tab, i) => (
          <Route
            path={tab.routepath ? tab.routepath : tab.path}
            key={i}
            element={tab.content}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Tabs;
