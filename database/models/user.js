   module.exports = function (sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        imagen: {
            type: dataTypes.STRING.BINARY(8000),
            allowNull: false,
        },

        nombre: {
            type: dataTypes.VARCHAR(200),
            allowNull: false,
        },

        email: {
            type: dataTypes.VARCHAR(200),
            allowNull: false,
        },

        telefono: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },

        categoria: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        contrasena: {
            type: dataTypes.VARCHAR(200),
            allowNull: false,
        },

        Carrito_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },

        created_at: {
            type: dataTypes.DATE,
         },

        updated_at: {
            type: dataTypes.DATE,
         }

    };

    let config = {
        tableName: "Usuario",
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Carrito, {
            as: "usuarioCarrito",
            through: "usuario_carrito",
            foreignKey: "Carrito_id",
            otherKey: null,
        })
    };

    return Usuario
}
