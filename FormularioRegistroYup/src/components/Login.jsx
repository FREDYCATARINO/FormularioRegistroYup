import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  const [intentos, setIntentos] = useState(3);
  const [error, setError] = useState("");

  const schema = Yup.object().shape({
    email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  useEffect(() => {
    if (intentos === 0) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [intentos, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

<<<<<<< HEAD
    try {
      await schema.validate({ email, password });
=======
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
>>>>>>> b6378eadbf9bb18e8b6cef73c6711f14b0c0f79c

      if (!usuarioGuardado || usuarioGuardado.correo !== email || usuarioGuardado.password !== password) {
        setIntentos((prev) => prev - 1);
        setError(intentos > 1 ? `Credenciales incorrectas. Te quedan ${intentos - 1} intentos.` : "Acceso bloqueado. Redirigiendo al registro...");
        return;
      }

      navigate("/bienvenida");
    } catch (validationError) {
      setError(validationError.message);
    }
  };

  return (
    <div className="login-container">
<<<<<<< HEAD
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Ingresa tu correo" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit" disabled={intentos <= 0}>Ingresar</button>
=======
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
>>>>>>> b6378eadbf9bb18e8b6cef73c6711f14b0c0f79c
      </form>
      <p className="error">{error}</p>
    </div>
  );
}
