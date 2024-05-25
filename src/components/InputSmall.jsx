import React from 'react';

const InputSmall = ({label, ...inputprops}) => {
  return (
    <div className="grid grid-cols-5 items-center gap-[20px]">
      <div className="col-span-2">
        <label className="text-[13px] text-[#5E6569]">{label}</label>
      </div>
      <div className="col-span-3">
        <input 
          className="
            w-full 
            h-[36px] 
            text-[13px] 
            placeholder:text-[#5E6569] 
            rounded-[8px] 
            border 
            border-[#454F53] 
            bg-[#1A252A] 
            focus:bg-[#1A252A] 
            focus:outline-none 
            px-[20px]
            text-right
            text-white
          "
          {...inputprops}
        />
      </div>
    </div>
  );
}

export default InputSmall;
