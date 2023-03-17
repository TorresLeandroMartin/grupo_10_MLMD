function authMiddleware(req, res, next){
    if(!req.session.userLogged){
        return res.redirect("/usuarios/iniciarsesion");
    }
    next();
    }
    
    module.exports = authMiddleware;