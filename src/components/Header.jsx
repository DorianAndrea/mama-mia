import headerImg from "../images/Header.jpg";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <img src={headerImg} alt="Pizzería Mamma Mia" className="header-img" />

      <div className="header-overlay"></div>

      <div className="header-content">
        <h1 className="header-title">¡Pizzería Mamma Mia!</h1>
        <p className="header-text">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;