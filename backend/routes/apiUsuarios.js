const express = require("express");
const router = express.Router();
const path = require("path");

const controllersApiUsuarios = require("../controllers/apis/controllersApiUsuarios");

router.post("/api/usuarios/registro", controllersApiUsuarios.procesoRegistro);
router.post("/api/usuarios/iniciosesion", controllersApiUsuarios.inicioSesion)
// router.get("/api/usuarios", controllersApiProducto.index);
// router.get("/api/usuarios/:id", controllersApiProducto.productoPorId);
module.exports = router;
