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
            type: dataTypes.DOUBLE//COMPLETAR,
        },
        /////////////////////////////////
        product_id: { //¿está bien?
            dataTypes: dataTypes.INT,
            foreignhKey: true,
        },
        user_id: { //¿está bien?
            dataTypes: dataTypes.INT,
            foreignhKey: true,
        },
    
    }

    let config = {
        tableName: "carrito",
        timestamps: false
    }

    let Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models) {
        Carrito.belongsToMany(models.Producto, {
            as: "carrito",
            through: "carrito_productos",
            foreignKey: "producto_id",
            otherKey: "producto_precio",
            timestamps: false,
        })

    }

    return Carrito
}
