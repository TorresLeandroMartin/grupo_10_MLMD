import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function iniciarSesion()
  {
    console.log(email,contrasena);
    let item = {email, contrasena};
    let result = await fetch("http://localhost:3001/api/usuarios/iniciosesion", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(item)
    })

    if (!result.ok) {
      const error = await result.json();
      alert(error.error);
      return;
    }
  
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate("/add")
    
  }

  return (
    <div>
      <Header />
      <h1>Login page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input type="password" placeholder="Contrasena" onChange={(e) => setContrasena(e.target.value)} className="form-control" />
        <br />
        <button onClick={iniciarSesion} className="btn btn-primary">Iniciar sesion</button>
      </div>
    </div>
  );
}

export default Login;
