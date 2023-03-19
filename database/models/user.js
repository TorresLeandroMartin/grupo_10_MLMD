   module.exports = function (sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
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
            type: dataTypes.INTEGER,

        },

        categoria: {
            type: dataTypes.STRING,

        },

        contrasena: {
            type: dataTypes.VARCHAR(30),

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
        tableName: "Usuario",
        timestamps: true,
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Carrito, {
            as: "usuarioCarrito",
            through: "usuario_carrito",
            foreignKey: "Carrito_id",
            otherKey: null,
            timestamps: true,
        })
    }

    return Usuario
}
