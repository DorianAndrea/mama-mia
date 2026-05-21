import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {

    setCart([...cart, pizza]);

  };

  const total = cart.reduce((acc, pizza) => {
    return acc + pizza.price;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;