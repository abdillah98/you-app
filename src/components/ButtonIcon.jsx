import React from 'react';
import Icon from './Icon';

const ButtonIcon = ({name, size, ...buttonProps}) => {
  return (
    <button className="text-white font-bold text-[16px]" {...buttonProps}>
      <Icon name={name} size={size}/>
    </button>
  );
}

export default ButtonIcon;
