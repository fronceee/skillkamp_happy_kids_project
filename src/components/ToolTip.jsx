import React from "react";

function ToolTip({ open, children }) {
  return (
    <div className={`absolute ${open ? "inline-block" : "hidden"} w-full`}>
      <div className="absolute top-16 w-full">
        {children}
      </div>
    </div>
  );
}

export default ToolTip;
