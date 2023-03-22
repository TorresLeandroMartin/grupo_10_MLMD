const fs = require("fs");
const path = require("path");

const db = require("../database/models")

const Producto = db.Producto;

let productosJson = (path.join(__dirname, "../data/products.json"));

let productos = JSON.parse(fs.readFileSync(productosJson, 'utf-8'));


const productController = {

  
  carrito: (req, res) => {
    res.render("carrito", {productos:productos});
  },

  index: (req, res) => {
    res.render("catalogo");
  },

  logueado: (req, res) => {

     const emailSession = req.session.userLogged;

    Producto.findAll()
    .then((productos) => { 
      if(emailSession){
          res.render("catalogoLogueado", {user: emailSession, productos})
        } else {
          res.redirect ("/usuarios/iniciarsesion", {user: " "})
        }
      })
  
    .catch(error => console.log(error));
  },

  crear: (req, res) => {
    
    res.render("nuevoProducto");
    
  },
  
  accionCrear: (req, res) => {

   Producto.create({
    "estilo": req.body.estilo,
    "nombre": req.body.nombre,
    "precio": req.body.precio,
    "talle": req.body.talle,
    "categoria": req.body.categoria,
    "descripcion": req.body.descripcion,
    "color": req.body.color
   })
    res.redirect ('catalogoLogueado');
  },

  detalle: (req, res) => {
    res.render("descripcion");
  },

  editar: (req, res) => {

    let pedidoProducto = Producto.findByPk(req.params.id);
    Promise.all ([pedidoProducto])
    .then(function(){
     res.render("edicion", {producto:pedidoProducto});
    });
  },

  editarProducto: (req, res) => {

  Producto.update({
    "estilo": req.body.estilo,
    "nombre": req.body.nombre,
    "precio": req.body.precio,
    "talle": req.body.talle,
    "categoria": req.body.categoria,
    "descripcion": req.body.descripcion,
    "color": req.body.color
   }, {
    where: {
      id: req.params.id,
    }
   });
   res.redirect("/productos/catalogoLogueado");

  },
    

  eliminarProducto: (req, res) => {

    Pelicula.destroy({
      where:{
        id: req.params.id,
      }
    })
   res.redirect("/productos/catalogoLogueado");
  },
};



module.exports = productController;
