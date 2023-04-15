
//Librerías Principales
const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");

// Models del sprint 5
//const usuarioNuevo = require("../models/usuarioNuevo");

// Uso de los métodos de modelos
const db = require("../database/models")
const Usuario = db.Usuario;


const userController = {

	crearCuenta: (req, res) => {
		return res.render("registro");
	},

	procesoRegistro: async (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('registro', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		try {
			const userInDb = await Usuario.findOne({
				where: { email: req.body.email }
			});

			if (userInDb) {
				return res.render('registro', {
					errors: {
						email: {
							msg: 'Este email ya está registrado'
						}
					},
					oldData: req.body
				});
			}

			const userCreate = {
				id: req.params.id,
				imagen: req.file.filename,
				...req.body,
				contrasena: await bcryptjs.hashSync(req.body.contrasena, 10),

			};

			await Usuario.create(userCreate);

			return res.redirect('/usuarios/iniciarsesion');
		} catch (error) {
			console.error(error);
			return res.render("error", {
				message: 'Error al crear el usuario'
			});
		}
	},


	iniciarSesion: (req, res) => {

		return res.render("inicioSesion");
	},

	iniciarSesionProceso: async (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('inicioSesion', {
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		}

		try {
			const userToLogin = await Usuario.findOne({
				where: { email: req.body.email },
			});

			if (!userToLogin) {
				return res.render('inicioSesion', {
					errors: {
						email: {
							msg: 'No se encuentra este email',
						},
					},
					oldData: req.body,
				});
			}

			const isPasswordCorrect = await bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena);;

			if (!isPasswordCorrect) {
				return res.render('inicioSesion', {
					errors: {
						email: {
							msg: 'Credenciales incorrectas',
						},
					},
					oldData: req.body,
				});
			}

			delete userToLogin.contrasena
			req.session.userLogged = userToLogin;

			if (req.body.recordar_email) {
				res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 60 * 24 });
			}

			return res.redirect('/usuarios/perfil/' + Usuario.findByPk(req.params.id));
		} catch (error) {
			console.error(error);
			return res.render('error', {
				message: 'Error en el proceso de login',
				error,
			});
		}
	},

	edicion: (req, res) => {
		const emailSession = req.session.userLogged;

		let pedidoUsuario = Usuario.findByPk(req.params.id);
		Promise.all([pedidoUsuario])
			.then(function () {

				if (emailSession) {
					res.render("editarUsuario", { user: emailSession })
				} else {
					res.redirect("/usuarios/iniciarsesion")
				}

			})
	},
	editarUsuario: (req, res) => {

		const updatedValues = {};
	

		if (req.file) updatedValues.imagen = req.file.filename;
		if (req.body.nombre) updatedValues.nombre = req.body.nombre;
		if (req.body.email) updatedValues.email = req.body.email;
		if (req.body.telefono) updatedValues.telefono = req.body.telefono;
		if (req.body.categoria) updatedValues.categoria = req.body.categoria;
		if (req.body.contrasena) updatedValues.contrasena = bcryptjs.hashSync(req.body.contrasena, 10);
	

		Usuario.update(updatedValues, {
			where: {
				id: req.params.id,
			}
		}).then(() => {
			res.redirect("/usuarios/perfil/" + req.params.id);
		}).catch(error => res.send(error))
	},

	profile: (req, res) => {

		const emailSession = req.session.userLogged;

		res.render("perfilUsuario", { user: emailSession });

	},

	cerrarsesion: (req, res) => {
		res.clearCookie("email");
		req.session.destroy();
		return res.redirect("/usuarios/iniciarsesion");
	},
};

module.exports = userController;


