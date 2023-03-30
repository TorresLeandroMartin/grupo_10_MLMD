<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require("fs");
const path = require("path");

let productosJson = (path.join(__dirname, "../data/products.json"));

let productos = JSON.parse(fs.readFileSync(productosJson, 'utf-8'));

=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6
// Librerías Principales

const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
// Operadores de sequelize

const { Association } = require('sequelize');

// Uso de los métodos de modelos
const db = require("../database/models")

const Producto = db.Producto;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6


const productController = {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  index: (req, res) => {
    res.render("catalogo");
  },

  logueado: (req, res) => {
    res.render("catalogoLogueado", { productos, user: req.session.userLogged });
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



=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6

  // Detalle de producto 

  detalle: (req, res) => {
    const emailSession = req.session.userLogged;

    Producto.findByPk(req.params.id)
      .then(function (productos) {
        if (emailSession) {
          res.render("./descripcion", { user: emailSession, productos})
        } else {
          res.status(404).send('Producto no encontrado')
        }
      })
  },

  

  // Carrito 

  carrito: (req, res) => {
    const emailSession = req.session.userLogged;

    if (emailSession) {
      res.render("carrito", { user: emailSession })
    };

  },

  // Catálogo 

  index: (req, res) => {
    Producto.findAll()
      .then((productos) => {
        res.render("catalogo", { productos: productos });
      })
  },

  logueado: (req, res) => {
    const emailSession = req.session.userLogged;

    Producto.findAll()
      .then((productos) => {
        if (emailSession) {
          res.render("catalogoLogueado", { productos: productos, user: emailSession })
        };
      })
      .catch(error => console.log(error));
  },

  // Crear producto / GET

  crear:  (req, res) => {
    const emailSession = req.session.userLogged;
      Producto.findAll()
      .then (() => {
      if (emailSession) {
        res.render("products/nuevoProducto", {user: emailSession })
      };
    
    }) .catch (error => console.log(error));
   
  },
  
  // Crear producto / POST

  accionCrear: async (req, res) => {
    try {
      await Producto.create({
        imagenDelProducto: req.file.filename,
        estilo: req.body.estilo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        talle: req.body.talle,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        color: req.body.color,
        usuario_id: req.body.usuario_id
      })
      res.redirect('/productos/catalogoLogueado');
    } catch (error) {
      res.send(error);
    }
  },

  // Editar producto / GET

  editar: (req, res) => {
    const emailSession = req.session.userLogged;


    Producto.findByPk(req.params.id)
      .then((productos) => {
        if (emailSession) {
          res.render("edicion", { user: emailSession, productos})
        };
      });

  },

  // Editar producto / POST

  editarProducto:  (req, res) => {
    const emailSession = req.session.userLogged;

     Producto.update({
      imagenDelProducto: req.file.filename,
      estilo: req.body.estilo,
      nombre: req.body.nombre,
      precio: req.body.precio,
      talle: req.body.talle,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      color: req.body.color,
      usuario_id: req.body.usuario_id
    }, {
      where: {
        id: req.params.id,
      },
      force: true
    }).then(() => {
      if (emailSession) {
        res.redirect("/productos/catalogoLogueado")
      }
    }).catch(error => res.send(error))

  },

  // Eliminar producto

  eliminarProducto: (req, res) => {
    const emailSession = req.session.userLogged;
    Producto.destroy({
      where: {
        id: req.params.id,
      },
      force: true
    }).then(() => {

      if (emailSession) {
        res.redirect("/productos/catalogoLogueado")
      }

    }).catch((error) => {
      res.send(error);
    })
  },

};


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6
module.exports = productController;
