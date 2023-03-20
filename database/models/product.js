module.exports = function (sequelize, dataTypes){
    let alias = "Producto";

    let cols = {


        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        estilo: {
            type: dataTypes.STRING,
        },

        nombre: {
            type: dataTypes.STRING,
        },

        precio: {
            type: dataTypes.BIGINTEGER(20),
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
        tableName: "Producto"
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Carrito, {
            as: "productos",
            through: "producto_carrito",
            foreignKey: "Carrito_id",
            otherKey: null
        })

    }

    return Producto
}

