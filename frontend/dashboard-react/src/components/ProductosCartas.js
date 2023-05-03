import React, { useState, useEffect } from "react";
import Cartas from "./Cartas";

function Productos() {
  // declarar el estado inicial del componente
  const [Productos, setProductos] = useState([]);

  // Trabajar con el ciclo de vida del componente

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        setProductos(data.datos);
      });
  }, []);

  return (
    <>
      <div>
        {Productos.map((producto, index) => {
          return <Cartas {...producto} key={producto + index} />;
        })}
      </div>
    </>
  );
}

export default Productos;
