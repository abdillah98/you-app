import React from 'react';
import Icon from './Icon';

const BadgeWithIcon = ({label, iconName}) => {
  return (
    <div className="
      flex 
      gap-[6px] 
      bg-[#161B19]
      py-[10px]
      px-[16px]
      rounded-full
      text-[14px]
      text-white
      font-semibold
    ">
      <Icon name={iconName} />
      {label}
    </div>
  );
}

export default BadgeWithIcon;
