module.exports = function (sequelize, dataTypes) {
  let alias = "Carrito";

  let cols = {


    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    cantidad: {
      type: dataTypes.INTEGER(11),
      allowNull: false
    },

    cupon: { // resta
      type: dataTypes.DECIMAL,
      allowNull: false
    },

    producto_precio: { // multiplica
      type: dataTypes.DECIMAL,
      allowNull: false
    },

    precio_total: { // promedio total
      type: dataTypes.DECIMAL,
      allowNull: false
    },

    producto_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }

  }

  let config = {
    tableName: "carrito"
  }

  let Carrito = sequelize.define(alias, cols, config);

  Carrito.associate = function (models) {
    Carrito.belongsToMany(models.Producto, {
      as: "productos",
      through: "carrito_productos",
      foreignKey: "producto_id",
      otherKey: null
    })

  }

  return Carrito
}
