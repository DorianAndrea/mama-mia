import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Card = () => {
  const { cart, aumentar, disminuir, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [mensaje, setMensaje] = useState("");

  const pagar = async () => {
    await fetch("http://localhost:5001/api/checkouts",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
        Authorization :`Bearer ${token}`,
      },
      body: JSON.stringify({cart}),
    });
    setMensaje('Compra realizada con éxito')
  }

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
     
      <Button variant="dark" disabled={!token} onClick={pagar} >Pagar</Button>
      {mensaje && <p className="mt-3 text-success">{mensaje}</p>}
      
    </div>
  );
};

export default Card;