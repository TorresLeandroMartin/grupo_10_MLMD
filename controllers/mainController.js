const mainController = {

    home: (req, res) => {
        res.render('index');
    },

    homeLogin: (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
       res.render('indexLogueado',{
        user: req.session.userLogged
      });
    },
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6

        const emailSession = req.session.userLogged;
    
            if(emailSession){
                res.render("indexLogueado", {user: emailSession})
            } else {
                res.redirect ("/usuarios/iniciarsesion")
            }

    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6
}

module.exports = mainController;