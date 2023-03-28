const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
//const uploadFile = require("../middlewares/multerMiddleware");



// Catálogos

// URL / GET /productos/catalogo
router.get("/catalogo", productController.index);

// URL / GET /productos/catalogo
router.get('/catalogoLogueado', productController.logueado)


// Crear producto

// URL / GET /productos/crear
router.get("/crearProducto", productController.crear);

// URL / POST /productos/crear
//router.post("/crear", uploadFile.single("imagenDelProducto"), productController.accionCrear);
router.post("/crear", productController.accionCrear);

// Descripción

// URL / GET /productos/descripcion/:id
router.get("/descripcion/:id", productController.detalle);


// Edición

// URL / GET /productos/edicion/:id
router.get("/edicion/:id", productController.editar);

// URL / PUT /productos/edicion/:id
//router.put("/edicion/:id", uploadFile.single("imagenDelProducto"), productController.editarProducto);
router.put("/edicion/:id", productController.editarProducto);


// DELETE

// URL / DELETE /productos/borrar/:id
router.delete("/borrar/:id", productController.eliminarProducto);


// Carrito

// URL / GET /productos/carrito
router.get("/carrito", productController.carrito);




module.exports = router;
