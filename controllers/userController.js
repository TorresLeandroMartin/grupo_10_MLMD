
const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");

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
			return res.render('registro', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userData = {
			id: usuarioNuevo.generateId(),
			imagen: req.file.filename,
			...req.body,
			contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
			
		}

		let allUsers = usuarioNuevo.findAll();
        let newUser = userData;
        allUsers.push(newUser);
        fs.writeFileSync(usuarioNuevo.fileName, JSON.stringify(allUsers, null, ' '));
	
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

  carrito: (req, res) => {
    res.render("carrito");
  },
};

module.exports = userController;


