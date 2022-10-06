import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, UserAuth } from '../../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="bg-red-500">{error}</p>
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
            Sign in
          </button>
        </form>
        <p className="my-4">
          Don't have an account?
          <Link to="/auth/signup" className="text-accent">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
