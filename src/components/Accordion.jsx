import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Accordion = ({ title, accordionContent }) => {
  const [content, setContent] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setContent(!content);
        }}
        className="flex items-center justify-between border-b border-black dark:border-white"
      >
        <h4 className="py-3 text-xs font-semibold"> {title}</h4>
        <Icon
          width={11}
          icon={
            content
              ? 'ant-design:caret-up-outlined'
              : 'ant-design:caret-down-outlined'
          }
        />
      </div>

      {content && (
        <ul className="mt-2 transition duration-300">
          {accordionContent.map((item, index) => (
            <Link to={item.link} key={index}>
              <li className="py-2 pl-3 text-xs">{item.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
