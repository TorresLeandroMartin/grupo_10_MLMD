const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


// URL /productos
router.get("/catalogo", productController.index);

router.get('/catalogoLogueado', productController.logueado)

// URL /productos/crear
router.get("/crearProducto", productController.crear);

// URL /productos/crear
router.post("/crear", productController.accionCrear);

// URL /productos/descripcion/:id
router.get("/descripcion/:id", productController.detalle);

// URL /productos/edicion/:id
router.get("/edicion/:id", productController.editar);

// URL /productos/edicion/:id
router.put("/edicion/:id", productController.editarProducto);

// URL /productos/borrar/:id
router.delete("/borrar/:id", productController.eliminarProducto);

// URL /usuarios/carrito
router.get("/carrito", productController.carrito);

module.exports = router;
