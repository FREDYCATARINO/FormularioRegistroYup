import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bienvenida.css";

export default function Bienvenida() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const navigate = useNavigate();

  return (
    <div className="bienvenida-container">
      <h1>¡Bienvenido, {usuario?.nombre}!</h1>
      <p>
        <span className="wave">Apellidos:</span> {usuario?.apellidos}
      </p>
      <p>
        <span className="wave">Correo:</span> {usuario?.correo}
      </p>
      <p>
        <span className="wave">Edad:</span> {usuario?.edad}
      </p>
      <p>
        <span className="wave">Teléfono:</span> {usuario?.telefono}
      </p>
      <button className="leavebutton" onClick={() => navigate("/")}>
        Cerrar Sesión
      </button>
    </div>
  );
}
