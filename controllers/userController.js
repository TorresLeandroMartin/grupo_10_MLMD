const fs = require("fs");
const path = require("path");

let usersJson = fs.readFileSync(path.join(__dirname, "../data/users.json"));

let users = JSON.parse(usersJson);

const userController = {
  iniciarSesion: (req, res) => {
    res.render("inicioSesion");
  },
  crearCuenta: (req, res) => {
    res.render("registro");
  },
  registrarse: (req, res) => {
    if (req.file) {
      let newUser = req.body;
      newUser.image = req.file.filename;

      const highestId = users.reduce(
        (maxId, user) => Math.max(maxId, user.id),
        0
      );

      newUser.id = highestId + 1;
      users.push(newUser);

      const newUserJson = JSON.stringify(users, null, 2);
      fs.writeFileSync(
        path.join(__dirname, "../data/users.json"),
        newUserJson,
        "utf-8"
      );

      res.send('Usuario creado!')
    } else {
      let file = req.file;

      if (!file) {
        const error = new Error("Por favor seleccione un archivo");
        error.httpSatusCode = 400;
        return next(error);
      }
    }
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
};

module.exports = userController;
