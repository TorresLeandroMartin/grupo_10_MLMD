import Header from "./Header";
import { useState } from "react";

function AddProduct() {
  const [nombreDelProducto, setNombreDelProducto] = useState("");
  const [imagenDelProducto, setImagenDelProducto] = useState("");
  const [estilo, setEstilo] = useState("");
  const [talle, setTalle] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");

  async function crearProducto() {
    const formData = new FormData();
    formData.append("imagenDelProducto", imagenDelProducto);
    formData.append("nombre", nombreDelProducto);
    formData.append("estilo", estilo);
    formData.append("talle", talle);
    formData.append("categoria", categoria);
    formData.append("descripcion", descripcion);
    formData.append("color", color);
    formData.append("precio", precio);

    let result = await fetch("http://localhost:3001/api/productos/crear", {
      method: "POST",
      body: formData,
    });
    alert("Data has been saved");
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          onChange={(e) => setNombreDelProducto(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Nombre del producto"
        />
        <br />
        <input
          onChange={(e) => setImagenDelProducto(e.target.files[0])}
          type="file"
          className="form-control"
          placeholder="File"
        />
        <br />
        <input
          onChange={(e) => setEstilo(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Estilo"
        />
        <br />
        <input
          onChange={(e) => setTalle(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Talle"
        />
        <br />
        <input
          onChange={(e) => setCategoria(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Categoria"
        />
        <br />
        <input
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Descripcion"
        />
        <br />
        <input
          onChange={(e) => setColor(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Color"
        />
        <br />
        <input
          onChange={(e) => setPrecio(e.target.value)}
          type="number"
          className="form-control"
          placeholder="1000.00"
        />
        <br />
        <button onClick={crearProducto} className="btn btn-primary">
          Crear Producto!
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
