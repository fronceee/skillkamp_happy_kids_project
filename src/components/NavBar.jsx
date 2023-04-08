import React from "react";

function NavBar() {
  const linkStyle = "mx-2 md:mx-4 lg:mx-6 tracking-wide";
  return (
    <div className="w-screen h-fit flex pb-6 justify-center flex-wrap">
      <div className="font-light text-sm md:text-lg">
        <a className={linkStyle} href="#">
          Home
        </a>
        <a className={linkStyle} href="#">
          Shop Collection
        </a>
        <a className={linkStyle} href="#">
          Our Story
        </a>
        <a className={linkStyle} href="#">
          Contacts
        </a>
      </div>
      <div className="flex justify-between items-center">
        <img src="./src/assets/account_circle.svg" alt="account icon" />
        <a>Log In</a>
      </div>
    </div>
  );
}

export default NavBar;
