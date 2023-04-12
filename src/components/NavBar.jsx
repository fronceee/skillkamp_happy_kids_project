import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const linkStyle = "mx-2 md:mx-4 lg:mx-6 tracking-wide";
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
      <div className="flex justify-between items-center">
        <img src="./src/assets/account_circle.svg" alt="account icon" />
        <a>Log In</a>
      </div>
    </div>
  );
}

export default NavBar;
