import React from 'react';
import SavedCoin from '../components/SavedCoin';
import { UserAuth } from '../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
  if (user) {
    return (
      <div className="container ">
        <div className="pt-10">
          <h1 className="font-bold md:text-xl">Account</h1>
          <div>
            <p className="text-sm">Welcome {user.email}</p>
          </div>
        </div>

        <div className="flex items-center py-8 my-12 justfiy-between rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="py-4 font-bold md:text-xl">My Portfolio</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Account;
