import React, { useState, useEffect } from "react";
import Cartas from "./Cartas";

function Productos(props) {
  // declarar el estado inicial del componente
  const [Productos, setProductos] = useState([]);

  // Trabajar con el ciclo de vida del componente
  useEffect(() => {
    const productoID = props.match?.params?.id;
    if (productoID) {
      fetch(`/api/productos/${productoID}`)
        .then(res => res.json())
        .then(data => setProductos(data));
    }
  }, [props.match?.params?.id]);

  return (
    <div>
      <h1>{Productos[0]?.name}</h1>
      <p>{Productos[0]?.description}</p>
      <ul>
        {Productos.map((producto, index) => (
          <Cartas {...producto} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Productos;
