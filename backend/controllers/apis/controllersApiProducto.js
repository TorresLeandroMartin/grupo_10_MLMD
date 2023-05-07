const db = require("../../database/models");
const Producto = db.Producto;

const multer = require("multer");

module.exports = {
  index: (req, res) => {
    Producto.findAll()
      .then((productos) => {
        // res.send(productos)
        const respuesta = {
          meta: {
            cantidad: productos.length,
            estatus: 200,
            url: "/api/productos",
          },
          datos: productos,
        };
        res.json(respuesta);
      })
      .catch((error) => res.send(error));
  },
  productoPorId: async (req, res) => {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: "Producto not found" });
      }
      res.json(producto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  crearProducto: async (req, res) => {
    try {
      const producto = await Producto.create({
        imagenDelProducto: req.file.filename,
        estilo: req.body.estilo,
        nombre: req.body.nombre,
        precio: req.body.precio,
        talle: req.body.talle,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        color: req.body.color,
      });

      return res
        .status(200)
        .json({ message: "Producto creado exitosamente", producto });
    } catch (error) {
      console.error("ESTE ES EL ERROR: ", error);
      return res
        .status(500)
        .json({ error: "Hubo un error al crear el producto" });
    }
  },
  eliminarProductoPorId: (req, res) => {
    Producto.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.status(200).send('Item deleted');
    }).catch((error) => {
      res.status(500).send(error);
    });
  },
};
