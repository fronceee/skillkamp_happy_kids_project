import React from "react";

function ButtonAddToCard({ children }) {
  return (
    <button className="border-2 w-4/5 py-2 text-normal font-light text-main-1 hover:bg-main-3 hover:text-main-2 hover:border-main-3 active:border-main-3 active:bg-main-3 active:text-main-2 transition-all duration-300">
      {children}
    </button>
  );
}

export default ButtonAddToCard;
