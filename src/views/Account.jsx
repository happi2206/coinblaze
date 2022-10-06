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
      <div className="max-w-[1140px] mx-auto">
        <div className="flex items-center justify-between py-8 my-12 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 border shadow-lg rounded-2xl hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex items-center py-8 my-12 justfiy-between rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="py-4 text-2xl font-bold">Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/signin" />;
  }
};

export default Account;
