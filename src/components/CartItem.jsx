import React, { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../contexts/cartContext";
function CartItem({ data }) {
  const { cartAction } = useContext(CartContext);
  return (
    <div className="w-full flex items-center gap-4 border-b-2">
      <img className="w-1/4" src={data.images[0]} alt={data.alt} />
      <div>
        <p className="text-lg font-thin">SkuID: {data.skuId}</p>
        <p>${data.discountedPrice}</p>
      </div>
      <TrashIcon
        className="w-6 ml-auto mr-6 text-main-1 hover:text-main-3 transition-colors ease-in"
        onClick={() => {
          cartAction.removeFromCart(data.itemId);
        }}
      />
    </div>
  );
}

export default CartItem;
