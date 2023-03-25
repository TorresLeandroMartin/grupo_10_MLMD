
const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const bcrypt = require('bcrypt')

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

		let userInDB = Usuario.findOne('email', req.body.email);
		
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

    iniciarSesionProceso: async (req, res) => {
	
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


