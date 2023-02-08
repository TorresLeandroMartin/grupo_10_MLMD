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
    let idProduct = req.params.id;

    let productToUpdate = products.find((product) => product.id == idProduct);

    let updatesToProduct = {
      id : productToUpdate.id,
      estilo : req.body.estilo,
      nombre : req.body.nombre,
      precio : req.body.precio,
      descuento: req.body.descuento,
      categoria : req.body.categoria,
      descripcion : req.body.descripcion,
      imagen : productToUpdate.imagen,
      color : req.body.color,
    };
    // Devuelve nuevo array de productos 
    let newProducts = products.map((product) => {
      if (product.id == idProduct) {
         product = { ...updatesToProduct }
      }

      return product
    });

    console.log(newProducts);
    const newProductJson = JSON.stringify(newProducts);

    fs.writeFileSync(
      path.join(__dirname, "../data/products.json"),
      newProductJson
    );

    //console.log(productToUpdate);
    //console.log('Separador');
    //console.log(updatesToProduct);
    //console.log('Separador');
    //console.log(newProducts);

    res.redirect('/')
  },

  eliminarProducto: (req, res) => {
    res.send("eliminado");
  },
};

module.exports = productController;
