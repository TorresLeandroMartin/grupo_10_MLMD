module.exports = function (sequelize, dataTypes){
    let alias = "Carrito";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },

        fecha: {
            dataTypes: dataTypes.DATE,
        },

        precio_total: {
            type: dataTypes.DOUBLE
        }
    }

    let config = {
        tableName: "carrito",
        timestamps: false
    }

    let Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models){
        Carrito.belongsToMany(models.Producto, {
            as: "productos", ////////????????
            foreignKey: "product_id",
        })
        Carrito.hasMany(models.User, {
            as: "usuarios", ////????
            foreignKey: "user_id", ////////????????
        })
    }

    return Carrito
}
