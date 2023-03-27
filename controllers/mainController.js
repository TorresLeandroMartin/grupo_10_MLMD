const mainController = {

    home: (req, res) => {
        res.render('index');
    },

    homeLogin: (req, res) => {

        const emailSession = req.session.userLogged;
    
            if(emailSession){
                res.render("indexLogueado", {user: emailSession})
            } else {
                res.redirect ("/usuarios/iniciarsesion")
            }

    }
}

module.exports = mainController;