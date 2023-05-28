import React, { createContext, useState } from "react";
import { v4 as itemId } from "uuid";

export const CartContext = createContext({});

export function useCartContext() {
  return useContext(CartContext);
}

const initialCart = {
  items: [],
};

function CartProvider({ children }) {
  const [cart, setCart] = useState(initialCart);

  function addToCart(product) {
    const newProduct = {itemId:itemId(),...product}
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, newProduct],
    }));
  }

  React.useEffect(() => {
    console.log(cart)
  },[cart])

  function removeFromCart(id) {
    setCart((prev) => ({
      ...prev,
      items: [...prev.items].filter(item => item.itemId !== id),
    }));
  }

  function clearCart(id) {
    setCart((prev) => initialCart);
  }
  const cartStore = {
    cart,
    cartAction: {
        addToCart,
        removeFromCart,
        clearCart,
    }
  }

  return (<CartContext.Provider value={cartStore}>{children}</CartContext.Provider>)
}

export default CartProvider