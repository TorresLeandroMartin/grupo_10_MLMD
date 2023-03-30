const mainController = {

    home: (req, res) => {
        res.render('index');
    },

    homeLogin: (req, res) => {
<<<<<<< HEAD
       res.render('indexLogueado',{
        user: req.session.userLogged
      });
    },
=======

        const emailSession = req.session.userLogged;
    
            if(emailSession){
                res.render("indexLogueado", {user: emailSession})
            } else {
                res.redirect ("/usuarios/iniciarsesion")
            }

    }
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
}

module.exports = mainController;