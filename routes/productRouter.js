const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// URL /productos
router.get("/catalogo", productController.index);

router.get('/catalogoLogueado', productController.logueado)

// URL /productos/crear
router.get("/crear", productController.crear);

// URL /productos/crear
router.post("/crearlo", productController.accionCrear);

// URL /productos/descripcion/:id
router.get("/descripcion/:id", productController.detalle);

// URL /productos/edicion/:id
router.get("/edicion/:id", productController.editar);

// URL /productos/edicion/:id
router.put("/edicion/:id", productController.editarProducto);

// URL /productos/edicion/:id
router.delete("/edicion/:id", productController.eliminarProducto);

module.exports = router;
