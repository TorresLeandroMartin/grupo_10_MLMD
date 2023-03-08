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
