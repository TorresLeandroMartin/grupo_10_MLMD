const mainController = {

    home: (req, res) => {
        res.render('index');
    },

    homeLogin: (req, res) => {
        let login = true;
       res.render('indexLogueado');
    }
}

module.exports = mainController;