function authMiddleware(req, res, next){
<<<<<<< HEAD
<<<<<<< HEAD
    if (!req.session.userLogged){
        return res.redirect('/usuarios/iniciarsesion');
    }
    next();
}

module.exports = authMiddleware
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
    if(!req.session.userLogged){
        return res.redirect("/usuarios/iniciarsesion");
    }
    next();
    }
    
<<<<<<< HEAD
    module.exports = authMiddleware;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
    module.exports = authMiddleware;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
