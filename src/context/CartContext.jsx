import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const pizzaExiste = cart.find((item) => item.id === pizza.id);

    if (pizzaExiste) {
      const nuevoCarrito = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, count: item.count + 1 }
          : item
      );

      setCart(nuevoCarrito);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const aumentar = (id) => {
    const nuevoCarrito = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );

    setCart(nuevoCarrito);
  };

  const disminuir = (id) => {
    const nuevoCarrito = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(nuevoCarrito);
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        aumentar,
        disminuir,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;