import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function Transaction() {
  return (
    <div className="mx-auto w-fit p-20">
        <CheckCircleIcon className="w-40 mx-auto mb-8 "/>
      <h1 className="tracking-wider text-2xl">Transaction Complete</h1>
    </div>
  );
}

export default Transaction;
