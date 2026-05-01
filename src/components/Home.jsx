import { Container, Row, Col, Card } from "react-bootstrap";
import { pizzas } from "../assets/pizzas";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <Container className="mt-4">
      
      {/* Card contenedora */}
      <Card className="p-4 shadow">
        
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} md={4} className="mb-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </Col>
          ))}
        </Row>

      </Card>
    </Container>
  );
};

export default Home;