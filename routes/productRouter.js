const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


// URL /productos
router.get("/catalogo",guestMiddleware, productController.index);

router.get('/catalogoLogueado', authMiddleware, productController.logueado)

// URL /productos/crear
router.get("/crear", authMiddleware, productController.crear);

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
