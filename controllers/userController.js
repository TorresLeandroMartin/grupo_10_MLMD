

const bcryptjs = require("bcryptjs"); 
const { validationResult } = require("express-validator");

const usuarioNuevo = require("../models/usuario");


const userController = {

  crearCuenta: (req, res) => {
    res.render("registro");
  },

  procesoRegistro: (req, res) => {

    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("registro", {
        errors: resultValidation.mapped(),
        oldData: req.body
      });
    }

    let userInDB = usuarioNuevo.findByField("email", req.body.email);
    
    if (userInDB) {
      return res.render("registro", {
        errors: {
          email:{
            msg: "Dicho email ya existe"
          }
        },
        oldData: req.body
      });
    }

      let userToCreate = {
       ...req.body,
       contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
       imagen: req.file.filename
     }


    let userCreated = usuarioNuevo.create(userToCreate);

   return res.redirect("./usuarios/iniciarsesion");
  },

  iniciarSesion: (req, res) => {

    res.render("inicioSesion");
  },

  iniciarSesionProceso: (req, res) => {
    let userToLogin = usuarioNuevo.findByField("email", req.body.email);
    
    if(userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena);
      if(isOkThePassword){
        delete userToLogin.contrasena;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user){
          res.cookie("userEmail", req.body.email, {maxAge: (1000 * 60) * 60})
        }

      return res.redirect("/usuario/perfil");
    }
  }
  return res.render ("iniciarsesion", {
    errors: {
      email: {
        msg: "Las credenciales son inválidas"
      }
    }
  });


    return res.render ("iniciarsesion", {
      errors: {
        email:{
          msg: "No se encuentra este email en nuestros registros"
        }
      }
    })

  },

  profile: (req, res) => {
    return res.render("perfilUsuario", {
      user: req.session.userLogged
    });
  },

  cerrarsesion: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/homeOficial");
  },

  carrito: (req, res) => {
    res.render("carrito");
  },
};

module.exports = userController;


