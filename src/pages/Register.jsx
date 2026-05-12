import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [contrasenna, setContrasenna] = useState("");
  const [confirContrasenna, setConfirContrasenna] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !contrasenna.trim() || !confirContrasenna.trim()) {
      setMensaje("Todos los campos son obligatorios");
      setTipoMensaje("danger");
      return;
    }

    if (contrasenna.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      setTipoMensaje("danger");
      return;
    }

    if (confirContrasenna.length < 6) {
      setMensaje("La confirmación debe tener al menos 6 caracteres");
      setTipoMensaje("danger");
      return;
    }

    if (contrasenna !== confirContrasenna) {
      setMensaje("Las contraseñas no coinciden");
      setTipoMensaje("danger");
      return;
    }

    setMensaje("Datos correctos, las contraseñas coinciden");
    setTipoMensaje("success");

    setEmail("");
    setContrasenna("");
    setConfirContrasenna("");
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