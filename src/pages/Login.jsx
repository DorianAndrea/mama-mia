import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [contrasenna, setContrasenna] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !contrasenna.trim()) {
      setError("Todos los datos son obligatorios");
      setMensaje("Datos incorrectos");
      setTipoMensaje("danger");
      return;
    }

    if (contrasenna.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setMensaje("Datos incorrectos");
      setTipoMensaje("danger");
      return;
    }

    setError("");
    setMensaje("Datos correctos");
    setTipoMensaje("success");
  };

  return (
    <section className="auth-page">
      <form className="formulario auth-card" onSubmit={validarDatos}>
        <div className="auth-icon">🍕</div>

        <h2 className="auth-title">Iniciar sesión</h2>

        <p className="auth-subtitle">
          Entra a tu cuenta de Pizzería Mamma Mía
        </p>

        {error && <p className="text-danger text-center">{error}</p>}

        {mensaje && (
          <div className={`alert alert-${tipoMensaje}`} role="alert">
            {mensaje}
          </div>
        )}

        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="usuario@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            name="contrasenna"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setContrasenna(e.target.value)}
            value={contrasenna}
          />
        </div>

        <button type="submit" className="btn btn-danger auth-button">
          Entrar
        </button>

        <p className="auth-link-text">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;