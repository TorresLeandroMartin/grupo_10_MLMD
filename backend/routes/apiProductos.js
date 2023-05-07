const express = require("express");
const router = express.Router();
const path = require("path");

const controllersApiProducto = require("../controllers/apis/controllersApiProducto");
const validateProduct = require("../middlewares/validateProduct");
const uploadFile = require("../middlewares/multerMiddleware");

router.get("/api/productos", controllersApiProducto.index);
router.get("/api/productos/detalle/:id", controllersApiProducto.productoPorId);
router.post(
  "/api/productos/crear",
  uploadFile.single("imagenDelProducto"),
  controllersApiProducto.crearProducto
);
router.delete(
  "/api/productos/borrar/:id",
  controllersApiProducto.eliminarProductoPorId
);

module.exports = router;
