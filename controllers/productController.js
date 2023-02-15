const fs = require("fs");
const path = require("path");

let productosJson = (path.join(__dirname, "../data/products.json"));

let productos = JSON.parse(fs.readFileSync(productosJson, 'utf-8'));


const productController = {

  index: (req, res) => {
    res.render("catalogo");
  },

  logueado: (req, res) => {
    res.render("catalogoLogueado", { productos });
  },

  crear: (req, res) => {
    res.render("nuevoProducto");
  },
  
  accionCrear: (req, res) => {
    const nuevoProducto = req.body;

    productos.push(nuevoProducto);

    const nuevoProductoJson = JSON.stringify(productos);

    fs.writeFileSync(path.join(__dirname, "../data/products.json"), nuevoProductoJson);

    res.redirect ('catalogoLogueado');
  },

  detalle: (req, res) => {
    res.render("descripcion");
  },

  editar: (req, res) => {


    const productoEncontrado = productos.find(
      (producto) => producto.id === req.params.id
    );

    //Si productFound = false devuelvo mensaje de error
    if (!productoEncontrado)
      return res.status(404).json({
        message: "Product not found",
      });

    let idProducto = req.params.id;

    let productoAEditar = productos.find((producto) => producto.id == idProducto);

    res.render("edicion", {producto:productoAEditar});
  },

  editarProducto: (req, res) => {
   let idProducto = req.params.id;

   let productoAEditar = productos.find((producto) => producto.id == idProducto);

    let actualizacionesAlProducto = {
      id : productoAEditar.id,
      estilo: req.body.estilo,
      nombre: req.body.nombre,
      precio: req.body.precio,
      categoria: req.body.categoria,
      talle: req.body.talle,
      descripcion: req.body.descripcion,
      color: req.body.color
    };
    // 
    // Devuelve nuevo array de productos 
    let productoEditado = productos.map((producto) => {
      if (producto.id == idProducto) {
         producto = { ...actualizacionesAlProducto }
      }

      return producto
    });

    const productoEditadoJson = JSON.stringify(productoEditado);

    fs.writeFileSync(
      path.join(__dirname, "../data/products.json"),
      productoEditadoJson
    );

    res.redirect("/productos/catalogoLogueado");
    },

  eliminarProducto: (req, res) => {

    let idProducto = req.params.id;

     let productoAEliminar = productos.filter((producto) => producto.id != idProducto);

     const productoEliminadoJSON = JSON.stringify(productoAEliminar);

     fs.writeFileSync(path.join(__dirname, "../data/products.json"),
     productoEliminadoJSON);

    res.redirect("/productos/catalogoLogueado");
  },
};



module.exports = productController;
