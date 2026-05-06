import { Container, Row, Col, Card } from "react-bootstrap";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";

const Home = () => {
   const [pizzasApi, setPizzasApi] = useState([])
  

   useEffect(() =>{
     consultarInformacion();
   },[])
   
   const consultarInformacion = async() =>{
    const url = "http://localhost:5001/api/pizzas";
    const response = await fetch(url)
    const data = await response.json()
    setPizzasApi(data);
   }

  return (
      <Container className="mt-4">
      
      {/* Card contenedora */}
      <Card className="p-4 shadow">
        
        <Row>
          {pizzasApi.map((pizza, id) => (
              <Col key={id} md={4} className="mb-4">
               <CardPizza
                
                name={pizza.name}
                description={pizza.desc}
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