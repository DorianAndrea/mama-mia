import { useState } from "react";
import { pizzaCart } from "../assets/pizzas";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const nuevoCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
    );
    setCart(nuevoCart);
  };

  const disminuir = (id) => {
    const nuevoCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza,
      )
      .filter((pizza) => pizza.count > 0); // elimina si queda en 0

    setCart(nuevoCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between border p-3 mb-3"
        >
          <div className="d-flex align-items-center">
            <img src={pizza.img} alt={pizza.name} width="80" className="me-3" />
            <h5>{pizza.name}</h5>
          </div>

          <h5>${pizza.price.toLocaleString()}</h5>

          <div className="d-flex align-items-center">
            <Button variant="danger" onClick={() => disminuir(pizza.id)}>
              -
            </Button>

            <span className="mx-3">{pizza.count}</span>

            <Button variant="success" onClick={() => aumentar(pizza.id)}>
              +
            </Button>
          </div>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString()}</h3>

      <Button variant="dark">Pagar</Button>
    </div>
  );
};

export default Cart;
