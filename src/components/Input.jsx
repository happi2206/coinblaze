import React from 'react';

const Input = ({
  label,
  placeholder = label,
  onChange,
  type = 'text',
  disabled,
  required,
  accept,
  value,
  id,
  name,
}) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label className="mb-2 text-sm text-left text-primary">{label}</label>
        <input
          className="w-auto h-auto px-2 py-2 text-xs border border-black border-solid rounded-md dark:border-white placeholder:text-gray-400 bg-primary focus:outline-0 focus:border-main"
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          disabled={disabled}
          required={required}
          accept={accept}
          value={value}
          id={id}
          name={name}
        />
      </div>
    </>
  );
};

export default Input;
