import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Tabla from "./Tabla";

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
        console.log(data.datos);
        setProductos(data.datos);
      });
  }, []);

  return (
    <>
      <div>
        <h2 className="text-center m-3">Tabla de Productos</h2>
        <div className="col-md-6 m-auto">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Talle</th>
                <th>Color</th>
                <th>Estilo</th>
                <th>Imagen</th>
                <th>Ver detalle</th>
              </tr>
            </thead>
            <tbody>
              {Productos.map((producto, index) => {
                return <Tabla {...producto} key={producto + index} />;
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Productos;
