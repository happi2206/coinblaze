import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../src/context/AuthContext';
import ModalContainer from './ModalContainer';
const Signup = ({ modalOpen, closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/account');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal}>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="relative w-full my-2 shadow-xl rounded-2xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border bg-primary border-input rounded-2xl"
                type="email"
                required
              />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="relative w-full my-2 shadow-xl rounded-2xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border bg-primary border-input rounded-2xl"
                type="password"
                required
              />
            </div>
          </div>
          <button
            className="w-full p-3 my-2 shadow-xl bg-button text-btnText rounded-2xl"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <p className="my-4">
          Already have an account?
          <Link to="/auth/signin" className="text-accent">
            Sign in
          </Link>
        </p>
      </div>
    </ModalContainer>
  );
};

export default Signup;
