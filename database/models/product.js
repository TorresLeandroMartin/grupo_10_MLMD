module.exports = function (sequelize, dataTypes){
    let alias = "Producto";

    let cols = {


        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        estilo: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING(200),
            allowNull: false
        },

        precio: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        talle: {
            type: dataTypes.STRING,
            allowNull: false

        },

        categoria: {
            type: dataTypes.STRING,
            allowNull: false
        },

        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        color: {
            type: dataTypes.STRING,
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as: "productos",
            foreignKey: "usuario_id",
        })

    }

    return Producto
}

