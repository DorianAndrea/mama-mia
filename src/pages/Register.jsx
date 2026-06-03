import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [contrasenna, setContrasenna] = useState("");
  const [confirContrasenna, setConfirContrasenna] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();

    if (!email || !contrasenna) {
      setMensaje("Todos los campos son obligatorios");
      setTipoMensaje("danger");
      return;
    }
    if (contrasenna !== confirContrasenna) {
      setMensaje("Las contraseñas no coinciden");
      setTipoMensaje("danger");
      return;
    }
    await register(email, contrasenna);
    navigate("/");
  };

  return (
    <section className="auth-page">
      <form className="formulario auth-card" onSubmit={validarDatos}>
        <div className="auth-icon">🍕</div>

        <h2 className="auth-title">Crear cuenta</h2>

        <p className="auth-subtitle">
          Regístrate para disfrutar las mejores pizzas
        </p>

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
            placeholder="Mínimo 6 caracteres"
            onChange={(e) => setContrasenna(e.target.value)}
            value={contrasenna}
          />
        </div>

        <div className="form-group mb-3">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmContrasenna"
            className="form-control"
            placeholder="Repite tu contraseña"
            onChange={(e) => setConfirContrasenna(e.target.value)}
            value={confirContrasenna}
          />
        </div>

        <button type="submit" className="btn btn-danger auth-button">
          Registrarme
        </button>

        <p className="auth-link-text">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
