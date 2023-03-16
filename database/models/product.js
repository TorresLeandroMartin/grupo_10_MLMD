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
            type: dataTypes.INTEGER

        },
        talle: {
            type: dataTypes.STRING

        },
        categoria: {
            type: dataTypes.STRING

        },
        descripcion: {
            type: dataTypes.STRING
        },
        color: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    return Producto
}

