import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "6rem" }}>🍕 404</h1>

      <h2 className="mb-3">¡Oops! Esta pizza no existe</h2>

      <p className="mb-4" style={{ maxWidth: "500px" }}>
        Parece que la ruta que estás buscando no está en nuestro menú.
        Vuelve al inicio y sigue disfrutando de Pizzería Mamma Mía.
      </p>

      <Link to="/" className="btn btn-danger btn-lg">
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;