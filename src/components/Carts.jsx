import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import { v4 as keyId } from "uuid";
import CartItem from "./CartItem";
import ToolTip from "./ToolTip";
import { Link } from "react-router-dom";

function Carts() {
  const { cart, cartAction } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFreeShipping, setIsFreeShipping] = useState(null);
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(null);

  useEffect(() => {
    setTotalPrice((prev) => {
      return cart.items.reduce((acc, cur) => acc + cur.discountedPrice, 0);
    });
  }, [cart]);

  useEffect(() => {
    if (totalPrice < 50) {
      setIsFreeShipping(false);
      setTotalPriceAfterDiscount(totalPrice + 20);
    } else {
      setIsFreeShipping(true);
      setTotalPriceAfterDiscount(totalPrice);
    }
  }, [totalPrice]);

  function handleCouponCodeInput(e) {
    setCouponCodeInput(e.target.value.toUpperCase());
  }

  function handleCouponCodeDiscount(e) {
    if (couponCodeInput.toUpperCase() === "HAPPY123") {
      setTotalPriceAfterDiscount(totalPrice * 0.9);
      setIsCouponValid(true);
    } else {
      setIsCouponValid(false);
      setTotalPriceAfterDiscount(totalPrice);
    }
  }

  return (
    <div className="mx-auto max-w-md my-8 flex items-center flex-col gap-4">
      <h1 className="self-start py-4 text-3xl font-thin tracking-wider border-main-4 border-b-2 border-dashed">
        Your Cart
      </h1>
      {cart.items.map((item) => (
        <CartItem key={keyId()} data={item} />
      ))}
      {isFreeShipping ? (
        <p>Yay! You got free shipping!</p>
      ) : (
        <p>${(50 - totalPrice).toFixed(2)} to get free shipping!</p>
      )}
      <div className="w-full flex justify-between">
        <ToolTip open={isCouponValid === false}>
          <p className={`${isCouponValid ? "text-main-1" : "text-main-3"}`}>
            Code is not valid.
          </p>
        </ToolTip>
        <input
          type="text"
          className="border-main-1 border py-4 pl-4 w-2/3"
          placeholder="Apply Coupon Code Here"
          value={couponCodeInput}
          onChange={handleCouponCodeInput}
        />
        <button
          onClick={handleCouponCodeDiscount}
          className="border-2 px-12 font-light text-xl text-main-1 hover:bg-main-1  hover:text-main-2 active:bg-main-1  active:text-main-2 transition-all duration-300"
        >
          Use
        </button>
      </div>
      <p className="self-end -mb-3 tracking-wide font-thin">
        Total ${totalPrice.toFixed(2)}
      </p>
      <p className="self-end -mb-3 tracking-wide font-thin">
        + ${isFreeShipping ? "0" : "20"} Shipping Fee.
      </p>
      {isCouponValid && (
        <p className="self-end -mb-3 tracking-wide font-thin">
          - ${(totalPrice * 0.1).toFixed(2)} 10% Discount (HAPPY123).
        </p>
      )}

      <p className="self-end text-2xl tracking-wide">
        Final Price: ${totalPriceAfterDiscount.toFixed(2)}
      </p>
      <Link to="/transaction" onClick={() => cartAction.clearCart()}>
        <button className="border-2 px-12 py-6 text-xl font-light text-main-1 hover:bg-main-1  hover:text-main-2 active:bg-main-1  active:text-main-2 transition-all duration-300">
          Buy Now
        </button>
      </Link>
    </div>
  );
}

export default Carts;
