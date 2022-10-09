import React from 'react';
import Button from './Button';
import SignUpModal from './SignUpModal';
import SideImage from '../assets/images/mockuper.png';
import { useState } from 'react';
import SignInModal from './SignInModal';
const Header = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-10">
      <div className="space-y-4 md:w-3/6">
        <h1 className="font-bold dark:text-white md:text-2xl lg:text-3xl">
          Free & Powerful Crypto Portfolio Tracker
        </h1>

        <p className="py-3">
          Track your crypto earnings like a pro, with a user-friendly and
          reliable portfolio tracker that you can rely on
        </p>

        <div className="space-x-4">
          <Button onClick={() => setSignUpModalOpen(true)}>Sign Up</Button>
          <Button outlineprimary onClick={() => setSignInModalOpen(true)}>
            Sign In
          </Button>
        </div>

        <p>Start your portfolio now!</p>
      </div>

      <div className="justify-end hidden w-3/5 md:flex">
        <img className="object-contain" src={SideImage} alt="preview of app" />
      </div>

      <SignUpModal
        modalOpen={signUpModalOpen}
        closeModal={() => setSignUpModalOpen(false)}
        closeOtherModal={() => {
          setSignUpModalOpen(false);
          setSignInModalOpen(true);
        }}
      />
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
    </header>
  );
};

export default Header;
