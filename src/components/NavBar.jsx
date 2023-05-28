import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const linkStyle = "mx-2 md:mx-4 lg:mx-6 tracking-wide";
  const { cart } = useContext(CartContext);
  return (
    <div className="w-screen h-fit flex pb-6 justify-center flex-wrap border-b border-main-4">
      <div className="font-light text-sm md:text-lg">
        <Link className={linkStyle} to="/">
          Home
        </Link>
        <Link className={linkStyle} to="/shop-collection">
          Shop Collection
        </Link>
        <Link className={linkStyle} to="/our-story">
          Our Story
        </Link>
        <Link className={linkStyle} to="/contacts">
          Contacts
        </Link>
      </div>
      <Link to="/cart" className="relative">
        <ShoppingCartIcon className="w-6 relative" />
        {cart.items.length > 0 && (
          <span class="absolute top-0.5 right-0 inline-block w-2 h-2 bg-main-3 rounded-full"></span>
        )}
      </Link>
    </div>
  );
}

export default NavBar;
