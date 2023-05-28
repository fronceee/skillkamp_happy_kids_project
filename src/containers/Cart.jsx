import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import CartEmpty from "../components/CartEmpty";
import Carts from "../components/Carts";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log(cart)
  return (
    <>
    {cart.items.length ? <Carts /> : <CartEmpty />}
    </>
  )
}

export default Cart;
