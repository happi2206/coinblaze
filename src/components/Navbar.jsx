import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="container flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>

      <div className="hidden md:block">
        <ToggleTheme />
      </div>

      <div className="hidden md:block">
        <Link to="/auth/signin" className="p-4 hover:text-accent">
          Sign in
        </Link>
        <Link
          to="/auth/signup"
          className="px-5 py-2 ml-2 shadow-lg bg-button text-btnText rounded-2xl hover:shadow-2xl"
        >
          Sign up
        </Link>
      </div>

      <div onClick={handleNav} className="z-10 block cursor-pointer md:hidden">
        {nav ? (
          <Icon icon="ant-design:close-outlined" />
        ) : (
          <Icon icon="ant-design:menu-outlined" />
        )}
      </div>

      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }
      >
        <ul className="w-full p-4">
          <li className="py-6 border-b">
            <Link to="/">Home</Link>
          </li>
          <li className="py-6 border-b">
            <Link to="/account">Account</Link>
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>

        <div>
          <Link
            to="/auth/signin"
            className="w-full p-3 my-2 border shadow-xl bg-primary text-primary border-secondary rounded-2xl"
          >
            Sign in
          </Link>
          <Link
            to="/auth/signup"
            className="w-full p-3 my-2 shadow-xl bg-button text-btnText rounded-2xl"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
