import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellidos: yup.string().required("Los apellidos son obligatorios"),
  edad: yup
    .number()
    .required("La edad es obligatoria")
    .min(18, "Debes ser mayor de edad"),
  telefono: yup.string().required("El teléfono es obligatorio"),
  correo: yup
    .string()
    .email("El correo no es válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(4, "Mínimo 4 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
});

export default function Registro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
      <form onSubmit={handleSubmit(onSubmit)} className="signup">
      <h1>Registro</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre")}
            name="first"
          />
          <label htmlFor="first">Nombre completo</label>
        </div>
        {!errors.nombre ? null : <p>{errors.nombre?.message}</p>}

        <div className="input-container">
          <input
            type="text"
            placeholder="Apellidos"
            {...register("apellidos")}
            name="last"
          />
          <label htmlFor="last">Apellidos</label>
        </div>
        {!errors.apellidos ? null : <p>{errors.apellidos?.message}</p>}

        <div className="input-container">
          <input
            type="number"
            placeholder="Edad"
            {...register("edad")}
            name="age"
          />
          <label htmlFor="age">Edad</label>
        </div>
        {!errors.edad ? null : <p>{errors.edad?.message}</p>}

        <div className="input-container">
          <input
            type="text"
            placeholder="Teléfono"
            {...register("telefono")}
            name="phone"
          />
          <label htmlFor="phone">Teléfono</label>
        </div>
        {!errors.telefono ? null : <p>{errors.telefono?.message}</p>}

        <div className="input-container">
          <input
            type="email"
            placeholder="Correo"
            {...register("correo")}
            name="mail"
          />
          <label htmlFor="mail">Correo electrónico</label>
        </div>
        {!errors.correo ? null : <p>{errors.correo?.message}</p>}

        <div className="input-container">
          <input
            type="password"
            placeholder="Contraseña"
            name="pass1"
            {...register("password")}
          />
          <label htmlFor="pass1">Contraseña</label>
        </div>
        {!errors.password ? null : <p>{errors.password?.message}</p>}

        <div className="input-container">
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            name="pass2"
            {...register("confirmPassword")}
          />
          <label htmlFor="pass2">Confirmar</label>
        </div>
        {!errors.confirmPassword ? null : (
          <p>{errors.confirmPassword?.message}</p>
        )}
        <button type="submit" className="button-54">Registrarse</button>
      </form>

      <button onClick={goToLogin} className="backbutton">
        Ir al Login
      </button>
    </div>
  );
}