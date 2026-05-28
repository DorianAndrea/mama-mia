import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card style={{ width: "100%" }} className="shadow-sm">
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />

      <Card.Body>
        <Card.Title className="text-center">{pizza.name}</Card.Title>

        <hr />

        <p className="fw-bold text-center">Ingredientes:</p>

        <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <h6 className="text-center">{pizza.desc}</h6>

        <h5 className="text-center">
          Precio: ${pizza.price.toLocaleString()}
        </h5>

        <div className="d-flex justify-content-between mt-3">
          <Link to ={`/pizza/${pizza.id}`}>
            <Button variant="outline-dark">Ver más 👀</Button>
          </Link>
          <Button variant="dark" onClick={() => addToCart(pizza)}>
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;