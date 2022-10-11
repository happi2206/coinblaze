import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../src/context/AuthContext';
import ModalContainer from './ModalContainer';
import Button from './Button';
import Input from './Input';
const Signup = ({ modalOpen, closeModal, closeOtherModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [error, setError] = useState('');
  const [submitting, isSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signUp, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 7) {
      setPasswordLengthError(true);
    } else {
      setPasswordLengthError(false);
      isSubmitting(true);
      try {
        await signUp(email, password);
        isSubmitting(false);
        closeModal();
        navigate('/');
      } catch (e) {
        console.error(e.message);
        setError(e.message);
        isSubmitting(false);
      }
    }
  };
  const signInWithGoogle = async () => {
    try {
      await googleSignIn();
      closeModal();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal}>
      <div className="max-w-[400px] mx-auto min-h-[600px] ">
        <span
          onClick={() => {
            closeModal();
          }}
          className="flex justify-end pb-3 cursor-pointer"
        >
          <Icon icon="iconoir:cancel" width={33} />
        </span>
        <h1 className="text-xl font-bold">
          IT'S FREE! Track your favorite coin in a single list 🚀
        </h1>
        <p className="pt-2 text-xs text-gray-500">
          By continuing, you agree to CoinBlaze Terms of Service.
        </p>

        <div className="py-5">
          <Button authbtn outlineprimary onClick={signInWithGoogle}>
            <span className="flex items-center justify-center">
              <Icon icon="flat-color-icons:google" width={13} />
              <span className="ml-3"> Continue with Google</span>
            </span>
          </Button>
        </div>

        <p className="text-center">or</p>
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

            {passwordLengthError && (
              <p className="pt-4 text-xs text-red-400">
                Password should not be less than six characters
              </p>
            )}

            {error && <p className="pt-4 text-xs text-red-400">{error}</p>}
          </div>

          <div className="pt-4">
            <Button authbtn type="submit" isSubmitting={submitting}>
              Sign Up
            </Button>
          </div>
        </form>
        <p className="pt-5 text-sm text-center">
          Already have an account?
          <span
            className="pl-2 cursor-pointer text-accent"
            onClick={() => {
              closeOtherModal();
            }}
          >
            Sign in
          </span>
        </p>
      </div>
    </ModalContainer>
  );
};

export default Signup;
