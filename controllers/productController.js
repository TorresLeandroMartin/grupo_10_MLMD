const fs = require("fs");
const path = require("path");

let productosJson = fs.readFileSync(
  path.join(__dirname, "../data/products.json")
);

let productos = JSON.parse(productosJson);

const productController = {

  index: (req, res) => {
    res.render("catalogo");
  },

  logueado: (req, res) => {
    res.render("catalogoLogueado");
  },

  crear: (req, res) => {
    res.render("nuevoProducto");
  },
  
  accionCrear: (req, res) => {
    const nuevoProducto = req.body;

    productos.push(nuevoProducto);

    const nuevoProductoJson = JSON.stringify(productos);

    fs.writeFileSync(path.join(__dirname, "../data/products.json"), nuevoProductoJson);

    res.redirect('catalogoLogueado')
  },
  detalle: (req, res) => {
    res.render("descripcion");
  },
  editar: (req, res) => {
    res.render("edicion");
  },
  editarProducto: (req, res) => {
    res.send("editado");
  },
  eliminarProducto: (req, res) => {
    res.send("eliminado");
  },
};

module.exports = productController;
