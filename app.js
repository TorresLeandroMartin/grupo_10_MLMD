var createError = require('http-errors');

// Llamcleaado a express
const express = require('express'); 
const session = require("express-session");

var path = require('path');
const cookies = require('cookie-parser');
var logger = require('morgan');

//methodOverride
var methodOverride = require('method-override');
//

// Llamamos a Router
var mainRouter = require('./routes/mainRouter');
var userRouter = require('./routes/userRouter');
var productRouter = require('./routes/productRouter');


// Guardamos la funcion en una variable app
const app = express();

//const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.use(session({
  secret: "HouseCloathing",
  resave: false,
  saveUninitialized: true,
}));

//app.use(userLoggedMiddleware);
app.use(cookies());


// indicamos que carpetas vamos a usar

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// view engine setup
app.set('views',[
  path.join(__dirname, 'views'),
  path.join(__dirname, '/views/products'),
  path.join(__dirname, '/views/users'),
]);

app.set('view engine', 'ejs');

//methodOverride
app.use(methodOverride('_method'))
//

// Hacemos publica la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Indicamos que vamos a usar el MainRouter
app.use('/', mainRouter);
app.use('/usuarios', userRouter);
app.use('/productos', productRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;