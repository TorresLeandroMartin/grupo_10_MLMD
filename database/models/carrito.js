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

    return Carrito
}
