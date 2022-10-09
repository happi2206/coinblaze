import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import ModalContainer from './ModalContainer';
import Button from './Button';
import Input from './Input';
const SignIn = ({ modalOpen, closeModal, closeOtherModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
  const signInWithGoogle = async () => {
    try {
      closeModal();
      await googleSignIn();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal}>
      <div className="w-full md:max-w-[400px] mx-auto h-screen md:h-auto md:min-h-[500px] py-12 md:py-0">
        <span
          onClick={() => {
            closeModal();
          }}
          className="flex justify-end pb-3 cursor-pointer"
        >
          <Icon icon="iconoir:cancel" width={33} />
        </span>
        <h1 className="text-xl font-bold">
          Login to track your favorite coin in a single list 🚀
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="my-4">
            <Input
              type="email"
              label="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <Input
              type="password"
              label="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-4">
            <Button authbtn type="submit">
              Sign In
            </Button>
          </div>
        </form>

        <p className="py-5 text-center">or</p>
        <div className="pb-5">
          <Button authbtn outlineprimary onClick={signInWithGoogle}>
            <span className="flex items-center justify-center">
              <Icon icon="flat-color-icons:google" width={13} />
              <span className="ml-3"> Continue with Google</span>
            </span>
          </Button>
        </div>

        <p className="pt-5 text-sm text-center">
          Don't have an account?
          <span
            className="pl-2 cursor-pointer text-accent"
            onClick={() => {
              closeOtherModal();
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </ModalContainer>
  );
};

export default SignIn;
