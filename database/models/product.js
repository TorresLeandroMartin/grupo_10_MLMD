module.exports = function (sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        estilo: {
            type: dataTypes.STRING//COMPLETAR,
        },
        nombre: {
            type: dataTypes.STRING

        },
        precio: {
            type: dataTypes.INTEGER//COMPLETAR,

        },
        talle: {
            type: dataTypes.STRING//COMPLETAR,

        },
        categoria: {
            type: dataTypes.STRING//COMPLETAR,

        },
        descripcion: {
            type: dataTypes.STRING//COMPLETAR,
        },
        color: {
            type: dataTypes.STRING//COMPLETAR,
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    return Producto
}

