import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="flex h-32 flex-col items-center justify-end md:basis-1/4">
      <p className="text-5xl font-bold">{title}</p>
      <p className="text-sub text-xl font-semibold">{subtitle}</p>
    </div>
  );
};
export default SectionTitle;
