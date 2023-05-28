import React from 'react';
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="min-w-screen max-w-7xl min-h-[400px] flex flex-col items-center justify-center">
    <div className="text-center">
      <p className="text-3xl font-light tracking-widest mb-8">
        Your cart is empty.
      </p>
      <Link to="/shop-collection">
        <div className="w-screen text-center pb-10">
          <button className="border-2 w-[14em] tracking-wide border-main-1 bg-main-1 py-4 text-xl font-light text-main-4 hover:bg-main-3 hover:text-main-2 hover:border-main-3 active:border-main-3 active:bg-main-3 active:text-main-2 transition-all duration-300">
            Shop All
          </button>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default CartEmpty