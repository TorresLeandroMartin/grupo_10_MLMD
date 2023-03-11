

const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const usuarioNuevo = require("../models/usuarioNuevo");


const userController = {

  crearCuenta: (req, res) => {
    return res.render("registro");
  },

  procesoRegistro: (req, res) => {

    const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('registro', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = usuarioNuevo.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('userRegisterForm', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
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

		return res.redirect('/usuarios/iniciarsesion');
	},

  iniciarSesion: (req, res) => {

   return res.render("inicioSesion");
  },

  iniciarSesionProceso: (req, res) => {
    let userToLogin = usuarioNuevo.findByField("email", req.body.email);

    if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena);
			if (isOkThePassword) {
				delete userToLogin.contrasena;
				req.session.userLogged = userToLogin;

				if(req.body.rememberuser) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/usuario/perfil/');
			} 
			return res.render('userLoginForm', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

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


