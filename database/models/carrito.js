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
            dataTypes: dataTypes.INTEGER,
        },

        createdAt: {
            dataTypes: dataTypes.DATE,
         },

        updatedAt: {
            dataTypes: dataTypes.DATE,
         }
    }

    let config = {
        tableName: "Carrito",
        timestamps: true,
    }

    let Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models) {
        Carrito.hasMany(models.Producto, {
            as: "productos",
            through: "carrito_productos",
            foreignKey: "Producto_id",
            otherKey: null,
            timestamps: true,
        })

    }

    return Carrito
}
