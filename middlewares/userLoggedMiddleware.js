<<<<<<< HEAD
<<<<<<< HEAD
function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }

    next();
}


module.exports = userLoggedMiddleware
=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2


const db = require("../database/models");

const userLoggedMiddleware = async (req, res, next) => {
	res.locals.isLogged = false;
  
	if (req.session.userLogged) {
	  const user = await db.Usuario.findByPk(req.session.userLogged.id);
	  if (user) {
		req.session.userLogged = user;
		res.locals.isLogged = true;
		res.locals.userLogged = user;
	  } else {
		delete req.session.userLogged;
	  }
	}
  
	next();
  };
  
<<<<<<< HEAD
  module.exports = userLoggedMiddleware;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
  module.exports = userLoggedMiddleware;
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
