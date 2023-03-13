const usuarioNuevo = require("../models/usuarioNuevo");

function guestMiddleware(req, res, next){
if(req.session.userLogged){
    return res.redirect("/usuarios/perfil/" + usuarioNuevo.getData.id );
}

next();
}

module.exports = guestMiddleware;