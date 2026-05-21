import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, aumentar, disminuir, total } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

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