import React from 'react';

const Button = ({ href, title, icon, containerClass }) => {
  return (
    <a
      href={href}
      className={`bg-dark relative flex w-fit cursor-pointer items-center justify-center gap-2 rounded-2xl px-8 py-6 text-xl font-black text-white ${containerClass} hover:bg-black`}
    >
      <span className="relative inline-flex overflow-hidden">
        <div>{title}</div>
      </span>

      {icon}
    </a>
  );
};

export default Button;
