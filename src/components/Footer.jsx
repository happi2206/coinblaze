import React from 'react';
import { Icon } from '@iconify/react';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import shego from '../../src/assets/images/shego.jpeg';
const Footer = () => {
  return (
    <div className="container pt-8 mt-8 text-xs text-primary">
      <div className="flex flex-col justify-between w-full space-y-6 uppercase md:flex-row ">
        <div className="md:w-96">
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img
                src={shego}
                alt="company logo of shego"
                className="object-cover w-12 rounded-[50%] h-12 border-2 border-accent"
              />
              <h1 className="text-lg font-semibold">CoinBlaze</h1>
            </div>
          </Link>
          <p className="pt-3 text-xs">
            CoinBlaze provides a fundamental analysis of the crypto market.
            CoinBlaze tracks price, volume and market capitalisation.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Explore</h2>
          <ul className="pt-3">
            <li className="py-1 ">
              <Link to="/coin/bitcoin">Bitcoin Price</Link>
            </li>
            <li className="py-1 ">
              <Link to="/coin/ethereum">Ethereum Price</Link>
            </li>
            <li className="py-1 ">
              <Link to="/coin/binancecoin">BNB Price</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">NFTs</h2>
          <ul className="pt-3">
            <li className="py-1 ">
              <Link to="/nft"> NFTs</Link>
            </li>
            <li className="py-1 ">
              <Link to="/trending"> Trending Coins</Link>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <div className="flex flex-col w-full md:flex-row md:justify-end">
            <div className="relative flex items-center justify-between py-4">
              <ToggleTheme />

              <div className="flex justify-between space-x-5 md:ml-10 text-accent">
                <a
                  href="https://twitter.com/afrohappi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="akar-icons:twitter-fill" />
                </a>
                <a
                  href="https://github.com/happi2206"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="akar-icons:github-fill" />
                </a>
                <a
                  href="https://www.instagram.com/growwithhappi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="akar-icons:instagram-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="py-20 text-center">
        built with 🫶🏾
        <span className="font-semibold"> by happi </span> ✨
      </p>
    </div>
  );
};

export default Footer;
