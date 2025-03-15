import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellidos: yup.string().required("Los apellidos son obligatorios"),
  edad: yup.number().required("La edad es obligatoria").min(18, "Debes ser mayor de edad"),
  telefono: yup.string().required("El teléfono es obligatorio"),
  correo: yup.string().email("El correo no es válido").required("El correo es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria").min(4, "Mínimo 4 caracteres"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
});

export default function Registro() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("usuario", JSON.stringify(data));
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");  
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nombre" {...register("nombre")} />
        <p>{errors.nombre?.message}</p>

        <input type="text" placeholder="Apellidos" {...register("apellidos")} />
        <p>{errors.apellidos?.message}</p>

        <input type="number" placeholder="Edad" {...register("edad")} />
        <p>{errors.edad?.message}</p>

        <input type="text" placeholder="Teléfono" {...register("telefono")} />
        <p>{errors.telefono?.message}</p>

        <input type="email" placeholder="Correo" {...register("correo")} />
        <p>{errors.correo?.message}</p>

        <input type="password" placeholder="Contraseña" {...register("password")} />
        <p>{errors.password?.message}</p>

        <input type="password" placeholder="Confirmar Contraseña" {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>

        <button type="submit">Registrarse</button>
      </form>

      <button onClick={goToLogin}>Ir al Login</button>  
    </div>
  );
}