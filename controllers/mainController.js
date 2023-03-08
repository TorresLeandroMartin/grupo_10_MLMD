const mainController = {

    home: (req, res) => {
        res.render('index');
    },

    homeLogin: (req, res) => {
       res.render('indexLogueado',{
        user: req.session.userLogged
      });
    },
}

module.exports = mainController;