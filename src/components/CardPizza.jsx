import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Precio: ${props.price}
        </Card.Text>
        <Card.Text>
          Ingredientes: {props.ingredients.join(', ')}
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outline-dark">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;