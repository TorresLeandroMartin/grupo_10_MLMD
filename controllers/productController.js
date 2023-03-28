// Librerías Principales

const fs = require("fs");
const path = require("path");

// Operadores de sequelize

const { Association } = require('sequelize');
const { Op } = require('sequelize');

// Uso de los métodos de modelos
const db = require("../database/models")

const Producto = db.Producto;


const productController = {


  // Detalle de producto 

  detalle: (req, res) => {


    Producto.findByPk(req.params.id)
      .then(function (busqueda) {
        if (!busqueda) {
          res.status(404).send('Producto no encontrado')
        } else {
          res.redirect("/productos/descripcion/" + Producto.findByPk(req.params.id), { producto: busqueda })
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
      .then(() => {
        if (emailSession) {
          res.render("edicion", { user: emailSession})
        };
      });

  },

  // Editar producto / POST

  editarProducto: async (req, res) => {

    await Producto.update({
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
      }
    }).then(() => {
      res.redirect("/productos/catalogoLogueado");
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


module.exports = productController;
