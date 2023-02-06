const userController = {
  iniciarSesion: (req, res) => {
    res.render("inicioSesion");
  },
  crearCuenta: (req, res) => {
    res.render("registro");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
};

module.exports = userController;
