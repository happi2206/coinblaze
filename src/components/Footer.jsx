import React from 'react';
import { Icon } from '@iconify/react';
// import ThemeToggle from './ThemeToggle';

const Footer = () => {
  return (
    <div className="container pt-8 mt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="py-2 text-sm">Help Center</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">API Status</li>
              <li className="py-2 text-sm">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">Careers</li>
              <li className="py-2 text-sm">Invest</li>
              <li className="py-2 text-sm">Legal</li>
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
      <p className="py-4 text-center">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
