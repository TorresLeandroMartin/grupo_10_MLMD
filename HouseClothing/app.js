// primero escribo los require

const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter')

// Middleware

// const port = 3000;
// const publicPath= path.resolve(__dirname, './public')

app.use(express.static('public'));


// app.listen(port, () => console.log('Corriendo en puerto ' + port));

// Rutas
// puede recibir dos parametros, el primero que recibe es lo que se va a concatenar con la URL aqui deberiamos especificar que todas las rutas de un especifico view tengan 
// una url especifica

app.use('/',mainRouter); 









const port = process.env.PORT || 3001;
app.listen(port, () => console.log('servidor corriendo en el puerto ' + port));