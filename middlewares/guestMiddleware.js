<<<<<<< HEAD
<<<<<<< HEAD
function guestMiddleware(req, res, next){
    if (req.session.userLogged){
        return res.redirect('/usuarios/profile');
    }
    next();
}

module.exports = guestMiddleware
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
const db = require("../database/models");
const Usuario = db.Usuario;

function guestMiddleware(req, res, next){
if(req.session.userLogged){
    return res.redirect("/usuarios/perfil/" + Usuario.findByPk(req.params.id));
}

next();
}

<<<<<<< HEAD
module.exports = guestMiddleware;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
module.exports = guestMiddleware;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
