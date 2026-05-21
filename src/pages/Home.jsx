import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.log("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>¡Pizzería Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>

      <main className="container mt-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;