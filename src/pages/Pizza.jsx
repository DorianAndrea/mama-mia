import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const parametros = useParams();
  const pizzaSeleccionada = parametros.id;
  const [pizzaDetalle, setPizzaDetalle] = useState();

  useEffect(() => {
    detallePizza();
  }, []);

  const detallePizza = async () => {
    const url = "http://localhost:5001/api/pizzas/" + pizzaSeleccionada;
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
          pizza={pizzaDetalle}
         
        />
      </Card>
    </Container>
    </>
  );
};

export default Pizza;
