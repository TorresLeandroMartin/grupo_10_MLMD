const express = require("express");
const router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
const productController = require("../controllers/productController");
const uploadFile = require("../middlewares/multerMiddleware");



// Catálogos

// URL / GET /productos/catalogo
router.get("/catalogo", productController.index);

// URL / GET /productos/catalogo
router.get('/catalogoLogueado', productController.logueado)

// Crear producto

// URL / GET /productos/crear
router.get("/crearProducto", productController.crear);

// URL / POST /productos/crear
router.post("/crear", uploadFile.single("imagenDelProducto"), productController.accionCrear);

// Descripción

// URL / GET /productos/descripcion/:id
router.get("/descripcion/:id", productController.detalle);


// Edición

// URL / GET /productos/edicion/:id
router.get("/edicion/:id", productController.editar);

// URL / PUT /productos/edicion/:id
router.put("/edicion/:id", uploadFile.single("imagenDelProducto"), productController.editarProducto);



// DELETE

// URL / DELETE /productos/borrar/:id
router.delete("/borrar/:id", productController.eliminarProducto);


// Carrito

// URL / GET /productos/carrito
router.get("/carrito", productController.carrito);



<<<<<<< HEAD
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2

module.exports = router;
