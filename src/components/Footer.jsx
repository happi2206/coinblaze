import React from 'react';
import { Icon } from '@iconify/react';
// import ThemeToggle from './ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';
import shego from '../../src/assets/images/shego.jpeg';
const Footer = () => {
  return (
    <div className="container pt-8 mt-8 text-xs text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex w-full uppercase ">
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
                NFTs
              </li>
              <li className="py-1 ">
                <Link to="/nft"> NFTs</Link>
              </li>
              <li className="py-1 ">
                <Link to="/trending"> Trending Coins</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="flex justify-end w-full">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                {/* <ThemeToggle /> */}
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="w-full p-2 mr-2 border shadow-xl bg-primary border-input rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="w-full p-2 px-4 my-2 shadow-xl bg-button text-btnText rounded-2xl hover:shadow-2xl md:w-auto">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="flex justify-between py-4 text-accent">
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
      <p className="py-4 text-center">
        built with 🫶🏾
        <span className="font-semibold"> by happi </span> ✨
      </p>
    </div>
  );
};

export default Footer;
