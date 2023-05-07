import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {

  useEffect(()=>{
    if(localStorage.getItem("user-info"))
    {
      navigate("/add")
    }
  }, [])
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    const item = { nombre, contrasena, email, telefono, categoria, imagen };
    
    try {
      const result = await fetch("http://localhost:3001/api/usuarios/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      });
      
      const data = await result.json();
      localStorage.setItem("user-info", JSON.stringify(data));
      navigate("/add");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <Header />
    <div className="col-sm-6 offset-sm-3">
      <h1>RegisterPage</h1>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Name"
      />
      <br />
      <input
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        type="password"
        className="form-control"
        placeholder="Password"
      />
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Email"
      />
      <br />
      <input
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Telefono"
      />
      <br />
      <input
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Categoria"
      />
      <br />
      <input
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Imagen"
      />
      <br />
      <button onClick={signUp} className="btn btn-primary">
        Registrarme
      </button>
    </div>
    </>
  );
}

export default Register;
