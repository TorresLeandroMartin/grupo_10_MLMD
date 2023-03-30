module.exports = function (sequelize, dataTypes){
    let alias = "detallePedido";

    let cols = {


        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        precio: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        cantidad: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
     
        id_Pedido: { 
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
        
        }
    

    let config = {
        tableName: "detallePedidos"
    }

    let detallePedido = sequelize.define(alias, cols, config);

    return detallePedido
}
