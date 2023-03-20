   module.exports = function (sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        imagen: {
            type: dataTypes.VARBINARY(8000),
        },

        nombre: {
            type: dataTypes.STRING,

        },

        email: {
            type: dataTypes.VARCHAR(30),

        },

        telefono: {
            type: dataTypes.INTEGER(11),

        },

        categoria: {
            type: dataTypes.STRING,

        },

        contrasena: {
            type: dataTypes.VARCHAR(30),

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
        tableName: "Usuario"
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Carrito, {
            as: "usuarioCarrito",
            through: "usuario_carrito",
            foreignKey: "Carrito_id",
            otherKey: null
        })
    }

    return Usuario
}
