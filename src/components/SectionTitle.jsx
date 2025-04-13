import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="absolute top-30 flex w-full flex-col items-center justify-center gap-2 2xl:top-20">
      <p className="text-5xl font-bold">{title}</p>
      <p className="text-sub text-xl font-semibold">{subtitle}</p>
    </div>
  );
};
export default SectionTitle;
