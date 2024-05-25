const Input = (props) => {
  return (
    <input 
      className="
        h-[51px] 
        align-middle
        px-[18px]
        bg-[#233B3F]
        text-white
        text-[13px]
        rounded-[9px]
        placeholder:text-[13px]
        placeholder:text-[#788386]
        placeholder:font-[500]
        focus:outline-none
        disabled:cursor-not-allowed
      "
      {...props}
    />
  );
};

export default Input;
