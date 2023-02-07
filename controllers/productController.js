const fs = require("fs");
const path = require("path");

let productosJson = (path.join(__dirname, "../data/products.json"));

let productos = JSON.parse(fs.readFileSync(productosJson, 'utf-8'));


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
      id : productoAEditar.id,
      estilo : req.body.estilo,
      nombre : req.body.nombre,
      precio : req.body.precio,
      descuento: req.body.descuento,
      categoria : req.body.categoria,
      descripcion : req.body.descripcion,
      imagen : productoAEditar.imagen,
      color : req.body.color,
    };

    console.log(productoAEditar)

    let productoNuevo = productos.map(producto =>{
      if(producto.id == id){
        return producto(...productoAEditar)
      }
      return producto;
    });

    fs.writeFileSync(productosJson, JSON.stringify(productoNuevo));

    res.redirect('/');

  },

  eliminarProducto: (req, res) => {
    res.send("eliminado");
  },
};

module.exports = productController;
