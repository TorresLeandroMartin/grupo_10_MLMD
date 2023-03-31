

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
  
  module.exports = userLoggedMiddleware;