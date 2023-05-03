const express = require("express");
const router = express.Router();
const path = require("path");

const controllersApiProducto = require("../controllers/apis/controllersApiProducto");

router.get("/api/productos", controllersApiProducto.index);
router.get("/api/productos/:id", controllersApiProducto.productoPorId);
module.exports = router;
