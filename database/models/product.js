module.exports = function (sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
        },

        estilo: {
            type: dataTypes.STRING,
        },

        nombre: {
            type: dataTypes.STRING,

        },

        precio: {
            type: dataTypes.BIGINTEGER,
        },

        talle: {
            type: dataTypes.STRING,

        },

        categoria: {
            type: dataTypes.STRING,
        },

        descripcion: {
            type: dataTypes.STRING,
        },

        color: {
            type: dataTypes.STRING,
        },

        Carrito_id: {
            type: dataTypes.INTEGER,
        },

        createdAt: {
            dataTypes: dataTypes.DATE,
         },

        updatedAt: {
            dataTypes: dataTypes.DATE,
         }

    }

    let config = {
        tableName: "Producto",
        timestamps: true,
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Carrito, {
            as: "productos",
            through: "producto_carrito",
            foreignKey: "Carrito_id",
            otherKey: null,
            timestamps: true,
        })

    }

    return Producto
}

