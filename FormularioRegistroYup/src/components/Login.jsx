import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  const [intentos, setIntentos] = useState(3);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
      !usuarioGuardado ||
      usuarioGuardado.telefono !== email ||
      usuarioGuardado.password !== password
    ) {
      setIntentos((prev) => prev - 1);
      setError(
        intentos > 1
          ? `Credenciales incorrectas. Te quedan ${intentos - 1} intentos.`
          : "Acceso bloqueado temporalmente."
      );
      return;
    }

    navigate("/bienvenida");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login">
        <h1>Iniciar Sesión</h1>
        <div className="input-container">
          <input
            type="text"
            name="email"
            placeholder="Teléfono registrado"
            required
          />
          <label>Teléfono</label>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <label>Contraseña</label>
        </div>
        <button type="submit" disabled={intentos <= 0} className="logbutton">
          Ingresar
        </button>
      </form>
      <p className="error">{error}</p>
    </div>
  );
}
