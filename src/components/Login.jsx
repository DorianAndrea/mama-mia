import { useState } from "react";

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
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p>{error}</p>}
        {mensaje && (
          <div className={`alert alert-${tipoMensaje}`} role="alert">
            {mensaje}
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contrasenna"
            className="form-control"
            onChange={(e) => setContrasenna(e.target.value)}
            value={contrasenna}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Login;
