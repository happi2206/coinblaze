import React from 'react';
import { Icon } from '@iconify/react';
const CoinLinks = ({ title, link, icon }) => {
  return (
    <div className="flex items-center text-sm text-gray-500">
      <span className="flex items-center">
        <span className="pr-1"> {title}</span>
        <Icon icon={icon} />:
      </span>
      <a
        href={link}
        target="_blank"
        className="pl-1 text-xs text-primary"
        rel="noreferrer"
      >
        {link}
      </a>
    </div>
  );
};

export default CoinLinks;
