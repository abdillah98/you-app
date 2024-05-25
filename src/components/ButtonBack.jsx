import { useRouter } from 'next/router';
import React from 'react';
import Icon from './Icon';

const ButtonBack = (props) => {
  const router = useRouter()

  return (
    <div className="!text-[14px] text-white font-bold flex items-center justify-between">
      <button 
        className="flex items-center"
        onClick={() => router.back()}
      >
        <Icon name="icon-arrow-left" size={20}/>
        Back
      </button>
      {props.username &&
        <div>@{props.username}</div>
      }
      {props.useButtonOption &&
        <button 
          className="text-[20px] tracking-none"
        >
          ...
        </button>
      }
    </div>
  );
}

export default ButtonBack;
