const fs = require("fs");
const path = require("path");

let usuariosJson = (path.join(__dirname, "../data/users.json"));

let usuarios = JSON.parse(fs.readFileSync(usuariosJson, 'utf-8'));

const userController = {
  iniciarSesion: (req, res) => {
    res.render("inicioSesion");
  },
  registrarse: (req, res) => {
    res.render("registro");
  },

  crearUsuario: (req, res) => {
    const nuevoUsuario = req.body;
  
    usuarios.push(nuevoUsuario);
  
    const nuevoUsuarioJson = JSON.stringify(usuarios);
  
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), nuevoUsuarioJson);
  
    res.redirect("/");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
};

module.exports = userController;
