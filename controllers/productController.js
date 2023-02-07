const fs = require("fs");
const path = require("path");

let productosJson = fs.readFileSync(
  path.join(__dirname, "../data/products.json")
);

let productos = JSON.parse(productosJson, 'utf-8');

let login = true;

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

    let id = req.params.id;

    let producto = productos.find(producto => producto.id == id);

    res.render('edicion', {producto});
  },

  editarProducto: (req, res) => {

    //const productoBuscado = productos.find(
    //(producto) => producto.id === req.params.id
    //);

    // Si productFound = false devuelvo mensaje de error
    //if (!productoBuscado)
    //return res.status(404).json({
    //     message: "Product not found",
    //});

    let id = req.params.id;

    let productoAEditar = productos.find(producto => producto.id == id);

    productoAEditar = {
      id : id,
      nombre : req.body.nombre,
      precio : req.body.precio,
      categoria : req.body.categoria,
      talle : req.body.talle,
      descripcion : req.body.descripcion,
      imagen : productoAEditar.imagen
    };

  
    let productoEditado = productos.map(producto =>{
      if(producto.id == productoAEditar.id){
        return producto(...productoAEditar)
      }
      return producto;
    });

    fs.writeFileSync(productosJson, JSON.stringify(productoEditado));

    res.redirect("/")
  },

  eliminarProducto: (req, res) => {
    res.send("eliminado");
  },
};

module.exports = productController;
