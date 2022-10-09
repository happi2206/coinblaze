import React from 'react';

const Button = ({
  onClick,
  disabled,
  outline,
  children,
  type = 'button',
  rounded,
  authbtn,
  outlineprimary,
  isSubmitting,
  full,
}) => {
  return (
    <button
      className={` ${
        authbtn && 'w-full bg-transparent border-black dark:border-white'
      } cursor-pointer  ${
        outlineprimary
          ? 'bg-transparent border border-black dark:border-white'
          : ' bg-button'
      } rounded text-sm text-black dark:text-white hover:opacity-75 px-8 py-3  font-medium
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
