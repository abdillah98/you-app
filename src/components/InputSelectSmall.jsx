import React from 'react';

const InputSelectSmall = ({label, options, defaultOption , ...inputprops}) => {
  return (
    <div className="grid grid-cols-5 items-center gap-[20px]">
      <div className="col-span-2">
        <label className="text-[13px] text-[#5E6569]">{label}</label>
      </div>
      <div className="col-span-3">
        <select 
          className="
            w-full 
            h-[36px] 
            text-[13px] 
            placeholder:text-[#5E6569] 
            rounded-[8px] 
            border 
            border-[#454F53] 
            bg-[#1A252A] 
            focus:outline-none 
            px-[20px]
            text-right
            text-white
          "
          {...inputprops}
        >
          {defaultOption && <option key={defaultOption} value="">{defaultOption}</option>}
          {options?.map(option => 
            <option key={option} value={option}>{option}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputSelectSmall;
