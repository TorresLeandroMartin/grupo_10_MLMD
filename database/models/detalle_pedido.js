module.exports = function (sequelize, dataTypes){
    let alias = "detallePedido";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
        },
        precio: {
            type: dataTypes.DOUBLE,
        },
        cantidad: {
            type: dataTypes.INTEGER,
        },
     
        id_Pedido: { 
            type: dataTypes.INT,
        }
    
    }

    let config = {
        tableName: "detallePedidos"
    }

    let detallePedido = sequelize.define(alias, cols, config);

    return detallePedido
}
