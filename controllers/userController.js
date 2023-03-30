<<<<<<< HEAD
<<<<<<< HEAD
const fs = require("fs");
const path = require("path");
const bcrypt = require('bcrypt')

let usersJson = fs.readFileSync(path.join(__dirname, "../data/users.json"));
let users = JSON.parse(usersJson);

const { validationResult } = require('express-validator')

const userController = {
  crearCuenta: (req, res) => {
    res.render("registro");
  },

  registrarse: (req, res) => {

    if (req.file) {
      let newUser = req.body
      newUser.password = bcrypt.hashSync(req.body.password, 10)
      newUser.image= req.file.filename

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

      res.redirect('IniciarSesion')

    } else {
      let file = req.file;

      if (!file) {
        const error = new Error("Por favor seleccione un archivo");
        error.httpSatusCode = 400;
        return next(error);
      }
    }
  },

  iniciarSesion: (req, res) => {
    res.render("inicioSesion");
  },

  loguearse: (req, res) =>{

    let usuarioALoguearse = users.find((unUsuario) => unUsuario.email == req.body.email)

    if (usuarioALoguearse){
      let passwordCorrecto = bcrypt.compareSync(req.body.password, usuarioALoguearse.password)
      if(passwordCorrecto){
        delete usuarioALoguearse.password; //Por seguridad
        req.session.userLogged = usuarioALoguearse; 
        //if(req.body.recordar_email){
         // res.cookie('usuarioEmail', req.body.email, { maxAge: (1000 * 30) * 2})
        //}
        return res.redirect('/homeOficial'); //acá agregar las vista de perfil de usuario
      }
    } 

    return res.render('inicioSesion',{
      errors:{
        email:{
          msg: "*Credenciales inválidas"
        }
      }
    })
  },

  profile:(req, res)=> {
    return res.render('perfilUsuario', {
      user: req.session.userLogged
    })
  },

  logout:(req, res)=> {
    req.session.destroy();
    return res.redirect('/');
  },
  
  carrito: (req, res) => {
    res.render("carrito");
  },
};

module.exports = userController;
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2

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


		Usuario.update({
			imagen: req.file.filename,
			nombre: req.body.nombre,
			email: req.body.email,
			telefono: req.body.telefono,
			categoria: req.body.categoria,
			contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
		}, {
			where: {
				id: req.params.id,
			}
		}).then(() => {
			res.redirect("/usuarios/perfil/" + Usuario.findByPk(req.params.id));
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


<<<<<<< HEAD
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
