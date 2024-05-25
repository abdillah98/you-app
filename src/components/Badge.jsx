import React from 'react';

const Badge = ({children}) => {
  return (
    <span className="px-[14px] py-[6px] rounded-full bg-[#1C272C] text-[14px] font-semibold text-white">
      {children}
    </span>
  );
}

export default Badge;
