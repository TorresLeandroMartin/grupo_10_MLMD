const db = require("../../database/models");
const Usuario = db.Usuario;
const bcryptjs = require("bcryptjs");

const apiUsuarioController = {
  procesoRegistro: async (req, res) => {
    try {
      const userInDb = await Usuario.findOne({
        where: { email: req.body.email },
      });

      if (userInDb) {
        return res
          .status(400)
          .json({ error: "El usuario ya se encuentra registrado" });
      }

      const userCreate = {
        ...req.body,
        contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
      };
      const newUser = await Usuario.create(userCreate);

      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Hubo un error" });
    }
  },
  inicioSesion: async (req, res) => {
    try {
      const userToLogin = await Usuario.findOne({
        where: { email: req.body.email },
      });

      if (!userToLogin) {
        return res.status(400).json({ error: "El usuario no existe" });
      }

      const isPasswordCorrect = await bcryptjs.compareSync(
        req.body.contrasena,
        userToLogin.contrasena
      );

      if (!isPasswordCorrect) {
        return res
          .status(400)
          .json({ error: "Las credenciales no son validas" });
      }

      delete userToLogin.contrasena;
      req.session.userLogged = userToLogin;

      return res.status(200).json(userToLogin);
    } catch (error) {
      console.error(error);
      return res.render("error", {
        message: "Error en el proceso de login",
        error,
      });
    }
  },
};

module.exports = apiUsuarioController;
