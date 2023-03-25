const db = require("../database/models");
const Usuario =  db.Usuario

function guestMiddleware(req, res, next){
if(req.session.userLogged){
    return res.redirect("/usuarios/perfil/" + Usuario.getData.id );
}

next();
}

module.exports = guestMiddleware;