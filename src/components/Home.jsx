import Header from "./Header";
import CardPizza from "./CardPizza";
import napolitanaImg from "../images/napolitana.jpg";
import espanolaImg from "../images/espanola.jpg";
import pepperoniImg from "../images/pepperoni.webp";

const Home = () => {
  return (
    <>
      <Header />

      <div className="cards-container">
        
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={napolitanaImg}
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={espanolaImg}
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img= {pepperoniImg}
        />

      </div>
    </>
  );
};

export default Home;