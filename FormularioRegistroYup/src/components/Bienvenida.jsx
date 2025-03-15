import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bienvenida.css";

export default function Bienvenida() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const navigate = useNavigate();

  return (
    <div className="bienvenida-container">
      <h2>Bienvenido, {usuario?.nombre}!</h2>
      <p>Apellidos: {usuario?.apellidos}</p>
      <p>Edad: {usuario?.edad}</p>
      <p>Teléfono: {usuario?.telefono}</p>
      <button onClick={() => navigate("/")}>Cerrar Sesión</button>
    </div>
  );
}