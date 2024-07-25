import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-[#f5e3c2] text-black font-semibold rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
