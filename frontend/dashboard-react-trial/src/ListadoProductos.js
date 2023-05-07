import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListadoProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.datos);
      });
  }, []);

  async function deleteOperation(id) {
    await fetch(`http://localhost:3001/api/productos/borrar/${id}`, {
      method: "DELETE",
    });
    setProductos(productos.filter((producto) => producto.id !== id));
  }

  return (
    <>
      <Header />
      <h1>Product List</h1>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Preview</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={`http://localhost:3001/img/avatars/${producto.imagenDelProducto}`}
                  alt={producto.id}
                />
              </td>
              <td>
                <span
                  onClick={() => deleteOperation(producto.id)}
                  className="delete"
                >
                  Delete
                </span>
              </td>
              <td>
                <Link to={"/update/" + producto.id}>
                  <span className="update">Update</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListadoProductos;
