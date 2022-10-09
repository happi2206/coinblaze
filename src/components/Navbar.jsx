import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { UserAuth } from '../context/AuthContext';
import shego from '../../src/assets/images/shego.jpeg';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import Accordion from './Accordion';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [cryptocurrencies, setCryptocurrencies] = useState(false);
  const [exchanges, setExchanges] = useState(false);
  const [nfts, setNfts] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container flex items-center justify-between h-20 ">
      <div onClick={handleNav} className="z-10 block cursor-pointer md:hidden">
        {nav ? (
          <Icon icon="ant-design:close-outlined" />
        ) : (
          <Icon icon="heroicons-solid:menu-alt-2" width={20} />
        )}
      </div>
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img
            src={shego}
            alt="company logo of shego"
            className="object-cover sm:w-12 rounded-[50%] h-8 w-8 sm:h-12 border-2 border-accent"
          />
          <h1 className="text-base font-semibold sm:text-lg">CoinBlaze</h1>
        </div>
      </Link>
      <div className="items-center justify-between hidden w-2/6 md:flex">
        <div className="relative">
          <div onMouseOver={() => setCryptocurrencies(true)}>
            <h1 className="text-xs font-medium cursor-pointer lg:text-sm hover:text-accent">
              Cryptocurrencies
            </h1>
          </div>
          {cryptocurrencies && (
            <div
              className="absolute rounded w-72 bg-primary"
              onMouseLeave={() => setCryptocurrencies(false)}
            >
              <ul className="py-3 text-xs border border-gray-500 rounded dark:border-none dark:rounded-0">
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  Trending Coins
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  New Cryptocurrencies
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  Global Charts
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  All Coins
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  By Market Cap
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <div onMouseOver={() => setExchanges(true)}>
            <h1 className="text-xs font-medium cursor-pointer lg:text-sm hover:text-accent">
              Exchanges
            </h1>
          </div>
          {exchanges && (
            <div
              className="absolute rounded w-72 bg-primary"
              onMouseLeave={() => setExchanges(false)}
            >
              <ul className="py-3 text-xs border border-gray-500 rounded dark:border-none dark:rounded-0">
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  Crypto Exhanges
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  Decentralized Exchanges
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  Derivatives
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <div onMouseOver={() => setNfts(true)}>
            <h1 className="text-xs font-medium cursor-pointer lg:text-sm hover:text-accent">
              NFT
            </h1>
          </div>
          {nfts && (
            <div
              className="absolute rounded w-72 bg-primary"
              onMouseLeave={() => setNfts(false)}
            >
              <ul className="py-3 text-xs border border-gray-500 rounded dark:border-none dark:rounded-0">
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  NFT Floor Price
                </li>
                <li className="px-5 py-3 font-semibold cursor-pointer hover:bg-green-100 dark:hover:bg-gray-700 hover:text-accent">
                  NFT Related Coins
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end space-x-5 xl:space-x-10">
        <div className="hidden md:block">
          <ToggleTheme />
        </div>

        <Link
          to="/portfolio"
          className="hidden text-xs font-medium cursor-pointer lg:text-sm md:block"
        >
          Portfolio
        </Link>

        {user?.email ? (
          <div>
            <Link to="/account" className="p-4">
              Account
            </Link>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link
              to="/auth/signin"
              className="p-4 text-xs font-medium hover:text-accent"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="px-5 py-2 ml-2 text-xs font-medium text-white rounded-lg shadow-lg bg-button text-btnText hover:shadow-2xl hover:opacity-75"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }
      >
        <div className="w-full p-4 space-y-3">
          <Accordion
            title="Cryptocurrencies"
            accordionContent={[
              { title: 'Trending Coins', link: 'trending' },
              { title: 'New Cryptocurrencies', link: 'new-coins' },
              { title: 'Global Charts', link: 'global-charts' },
              { title: 'All Coins', link: '/' },
            ]}
          />
          <Accordion
            title="Exchanges"
            accordionContent={[
              { title: 'Crypto Exchanges', link: 'exchanges' },
              {
                title: 'Decentralized Exchanges',
                link: 'decentralized-exchanges',
              },
              { title: 'Deriviatives', link: 'deriviatives' },
            ]}
          />
          <Accordion
            title="NFT"
            accordionContent={[
              { title: 'NFT Floor Price', link: 'nft' },
              { title: 'NFT Related Coins', link: 'nft' },
            ]}
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="block md:hidden">
          <ToggleTheme />
        </div>
        <div
          className="block cursor-pointer md:hidden"
          onClick={() => setSignInModalOpen(true)}
        >
          <Icon icon="mdi:account" width={22} />
        </div>
      </div>
      <SignInModal
        modalOpen={signInModalOpen}
        closeModal={() => {
          setSignInModalOpen(false);
        }}
        closeOtherModal={() => {
          setSignInModalOpen(false);
          setSignUpModalOpen(true);
        }}
      />
      <SignUpModal
        modalOpen={signUpModalOpen}
        closeModal={() => setSignUpModalOpen(false)}
        closeOtherModal={() => {
          setSignUpModalOpen(false);
          setSignInModalOpen(true);
        }}
      />
    </div>
  );
};

export default Navbar;
