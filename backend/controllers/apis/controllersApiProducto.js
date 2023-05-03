const db = require("../../database/models");
const Producto = db.Producto;

module.exports = {
  index: (req, res) => {
    Producto.findAll()
      .then((productos) => {
        // res.send(productos)
        const respuesta = {
          meta: {
            cantidad: productos.length,
            estatus: 200,
            url: "/api/productos"
          },
          datos: productos
        }
        res.json(respuesta);
      })
      .catch((error) => res.send(error))
  },
  productoPorId: (req, res) => {
    
    Producto.findByPk(req.params.id)
    .then((producto) => {
      res.json(producto)
    })
    .catch((error) => res.send(error))

  }
}
