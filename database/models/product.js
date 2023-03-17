module.exports = function (sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        estilo: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING

        },
        precio: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        talle: {
            type: dataTypes.STRING

        },
        categoria: {
            type: dataTypes.STRING

        },
        descripcion: {
            type: dataTypes.STRING//COMPLETAR (posible PK),
        },
        color: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Carrito, {
            as: "productosCarrito",
            through: "producto_carrito",
            foreignKey: "carrito_id",
            otherKey: null,
            timestamps: false,
        })

    }

    return Producto
}

