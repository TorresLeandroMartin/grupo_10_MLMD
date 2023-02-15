var createError = require('http-errors');

// Llamcleaado a express
var express = require('express'); 

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Cambio Ayma
var methodOverride = require('method-override');
//

// Llamamos a Router
var mainRouter = require('./routes/mainRouter');
var userRouter = require('./routes/userRouter');
var productRouter = require('./routes/productRouter');

// Guardamos la funcion en una variable app
var app = express();

// view engine setup
app.set('views',[
  path.join(__dirname, 'views'),
  path.join(__dirname, '/views/products'),
  path.join(__dirname, '/views/users'),
]);

app.set('view engine', 'ejs');

// indicamos que carpetas vamos a usar

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Ayma
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

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;