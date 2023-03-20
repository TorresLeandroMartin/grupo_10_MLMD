module.exports = function (sequelize, dataTypes){
    let alias = "detallePedido";

    let cols = {


        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        precio: {
            type: dataTypes.BIGINTEGER(20),
        },

        cantidad: {
            type: dataTypes.INTEGER(11),
        },
     
        id_Pedido: { 
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
        tableName: "detallePedidos"
    }

    let detallePedido = sequelize.define(alias, cols, config);

    return detallePedido
}
