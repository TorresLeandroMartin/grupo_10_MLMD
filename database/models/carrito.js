module.exports = function (sequelize, dataTypes){
    let alias = "Carrito";

    let cols = {
        

        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        cantidad: {
            type: dataTypes.INTEGER(11),
        },

        cupon: { // resta
            type: dataTypes.INTEGER(11),
        },

        producto_precio: { // multiplica
            type: dataTypes.INTEGER(11),
        },

        precio_total: { // promedio total
            type: dataTypes.BIGINTEGER(20),
        },

        Producto_id: { 
            type: dataTypes.INTEGER(10).UNSIGNED,
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
