module.exports = function (sequelize, dataTypes){
    let alias = "detallePedido";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        precio: {
            type: dataTypes.DOUBLE//COMPLETAR,
        },
        cantidad: {
            type: dataTypes.INTEGER//COMPLETAR,
        },
        /////////////////////////////////
        
        id_Pedido: { //¿está bien?
            dataTypes: dataTypes.INT,
            foreignhKey: true,
        },
    
    }

    let config = {
        tableName: "detallePedidos",
        timestamps: false
    }

    let detallePedido = sequelize.define(alias, cols, config);

    return detallePedido
}
