   module.exports = function (sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        imagen: {
            type: dataTypes.FILE//???COMPLETAR,
        },
        nombre: {
            type: dataTypes.STRING

        },
        email: {
            type: dataTypes.STRING//COMPLETAR,

        },
        telefono: {
            type: dataTypes.INTEGER

        },
        categoria: {
            type: dataTypes.STRING//COMPLETAR,

        },
        contrasena: {
            type: dataTypes.STRING//COMPLETAR,

        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Carrito, {
            as: "usuarioCarrito",
            through: "usuario_carrito",
            foreignKey: "carrito_id",
            otherKey: null,
            timestamps: false,
        })
    }

    return Usuario
}