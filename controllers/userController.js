
const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");

const usuarioNuevo = require("../models/usuarioNuevo");

const db = require("../database/models")

const Usuario = db.Usuario;

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
			return res.render('registro', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
//
		Usuario.create ({
			id: req.params.id,
			imagen: req.file.filename,
			...req.body,
			contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
			
		})

		res.redirect('iniciarsesion');
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

				if(req.body.recordar_email) {
					res.cookie('email', userToLogin.email, { maxAge: 60 * 60 * 24 * 31 })
				}

				return res.redirect('/usuarios/perfil/' + usuarioNuevo.getData.id);
			} 
			return res.render('inicioSesion', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					} 
				}
			});

		}

  },

  edicion: (req, res) => {
	
    let pedidoUsuario = Usuario.findByPk(req.params.id);
    Promise.all ([pedidoUsuario])
    .then(function(){
     res.render("editarUsuario");
    });

  },

  editarUsuario: (req, res) => {

	Usuario.update({
		imagen: req.file.filename,
		...req.body,
		contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
	 }, {
	  where: {
		id: req.params.id,
	  }
	 });
	 res.redirect("/usuarios/perfil");
  
	},

    profile: (req, res) => {
  
	const emailSession = req.session.userLogged;

	if(emailSession){
		res.render("perfilUsuario", {user: emailSession})
	} else {
		res.redirect ("/usuarios/iniciarsesion", {user: " "})
	}
  },

  cerrarsesion: (req, res) => {
    res.clearCookie("email");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;


