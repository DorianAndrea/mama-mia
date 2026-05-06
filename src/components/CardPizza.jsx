import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPizza = ({ name, price, ingredients, img, description }) => {
  return (
    <Card style={{ width: "100%" }} className="shadow-sm">
      <Card.Img variant="top" src={img} alt={name} />

      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>

        <hr />

        <p className="fw-bold text-center">Ingredientes:</p>
        <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />
         <h6 className="text-center"> {description}</h6>
        <h5 className="text-center">Precio: ${price.toLocaleString()}</h5>
        {/* Botones */}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="outline-dark">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
