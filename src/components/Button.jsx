import React from 'react';

const Button = ({
  onClick,
  disabled,
  outline,
  children,
  type = 'button',
  rounded,
  full,
  outlineprimary,
  isSubmitting,
}) => {
  return (
    <button
      className={` cursor-pointer ${
        outlineprimary ? 'bg-black border border-white' : ' bg-button'
      }  rounded text-sm text-white hover:opacity-75 px-8 py-3  font-medium
       ${isSubmitting && 'cursor-not-allowed opacity-75'}`}
      disabled={isSubmitting}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
