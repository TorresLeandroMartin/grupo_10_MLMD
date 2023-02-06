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
    res.render('edicion');
  },

  editarProducto: (req, res) => {
    // const productoBuscado = productos.find(
    //   (producto) => producto.id === req.params.id
    // );

    // // Si productFound = false devuelvo mensaje de error
    // if (!productoBuscado)
    //   return res.status(404).json({
    //     message: "Product not found",
    //   });

    // let idProducto = req.params.id;

    // let productoAEditar = productos.find((producto) => producto.id == idProducto);

    // res.render("edicion", { producto: productoAEditar });
    res.send('Editado')
  },
  eliminarProducto: (req, res) => {
    res.send("eliminado");
  },
};

module.exports = productController;
