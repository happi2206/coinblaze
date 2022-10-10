import React from 'react';
import comingsoon from './../assets/images/comingsoon.svg';
const NotFound = () => {
  return (
    <div className="container flex justify-center">
      <div className="w-8/12 py-20 md:w-3/6">
        <img src={comingsoon} alt="Coming soon illustration" />
        <h2 className="py-10 text-sm text-center md:text-lg">
          This Page is Coming soon
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
