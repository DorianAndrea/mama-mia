import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardPizza from "../components/CardPizza";

const Pizza = () => {
  const [pizzaDetalle, setPizzaDetalle] = useState(null);

  useEffect(() => {
    detallePizza();
  }, []);

  const detallePizza = async () => {
    const url = "http://localhost:5001/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    setPizzaDetalle(data);
  };
   if (!pizzaDetalle) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <>
      <Container className="mt-4">
      <Card className="p-4 shadow">
        <CardPizza
          name={pizzaDetalle.name}
          price={pizzaDetalle.price}
          ingredients={pizzaDetalle.ingredients}
          img={pizzaDetalle.img}
          description={pizzaDetalle.desc}
        />
      </Card>
    </Container>
    </>
  );
};

export default Pizza;
