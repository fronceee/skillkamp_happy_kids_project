import React from "react";
import { Link } from "react-router-dom";

export default function LogoBar({ fontSize }) {
  return (
    <div className="text-center select-none">
      <Link to="/">
        <h1
          className={`py-12 ${fontSize} tracking-[0.125em] md:tracking-[0.3em]`}
        >
          happy kids
        </h1>
      </Link>
    </div>
  );
}
