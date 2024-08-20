// import { useState } from "react";
import PropTypes from "prop-types";

import useForm from "../../hooks/useForm";
import { getUserByEmailAndPassword } from "../../services/usersServices";

const Login = ({ setAuth }) => {
  const [form, handleChange, handleReset] = useForm({
    email: "",
    password: "",
  });
  //   const [form, setForm] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (event) => {
  //     const { id, value } = event.target;
  //     // console.log("id:" + id);
  //     // console.log("value: " + value);
  //     setForm({
  //       ...form,
  //       [id]: value,
  //     });
  //   };

  //   const handleReset = () => {
  //     setForm({
  //       email: "",
  //       password: "",
  //     });
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await getUserByEmailAndPassword(form);
    if (user) {
      console.table(user);
      handleReset();
      setAuth(true);
    } else {
      alert("Usuario no encontrado, por favor verifique sus credenciales");
    }
  };

  return (
    <main>
      <h1>Inicie sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese su email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </main>
  );
};

Login.propTypes = {
  setAuth: PropTypes.func.isRequired,
};

export default Login;
