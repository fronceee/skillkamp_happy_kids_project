import React from "react";

function Button({ children }) {
  return (
    <button className="border-2 p-2 md:py-4 md:px-8 text-sm md:text-xl lg:text-2xl lg:px-14 focus:border-t-main-3 font-light text-main-1 hover:bg-main-1  hover:text-main-2 active:bg-main-1  active:text-main-2 transition-all duration-300">
      {children}
    </button>
  );
}

export default Button;
