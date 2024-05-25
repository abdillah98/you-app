const Button = ({ children, ...buttonProps }) => {
  return (
    <button 
      className="
        text-white 
        font-bold 
        text-[14px]
        bg-gradient-to-r 
        from-[#62CDCB] 
        to-[#4599DB]
        min-h-[48px]
        rounded-[9px]
        shadow-lg shadow-cyan-500/50 
        disabled:opacity-[0.4]
        disabled:cursor-not-allowed
      "
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
