module.exports = function (sequelize, dataTypes){
    let alias = "Carrito";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
        },
        cantidad: {
            type: dataTypes.INTEGER,
        },

        cupon: { // resta
            type: dataTypes.INTEGER,
        },

        producto_precio: { // multiplica
            type: dataTypes.INTEGER,
        },

        precio_total: { // promedio total
            type: dataTypes.BIGINTEGER,
        },

        Producto_id: { 
            type: dataTypes.INTEGER,
        },

        created_at: {
            type: dataTypes.DATE,
         },

        updated_at: {
            type: dataTypes.DATE
         }

       }

    let config = {
        tableName: "Carrito"
    }

    let Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models) {
        Carrito.hasMany(models.Producto, {
            as: "productos",
            through: "carrito_productos",
            foreignKey: "Producto_id",
            otherKey: null
        })

    }

    return Carrito
}
