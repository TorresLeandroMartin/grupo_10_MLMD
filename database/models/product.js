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

        Carrito_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },

        created_at: {
            type: dataTypes.DATE,
         },

        updated_at: {
            type: dataTypes.DATE
         }

    }

    let config = {
        tableName: "Producto",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Carrito, {
            as: "productos",
            through: "producto_carrito",
            foreignKey: "Carrito_id",
            otherKey: null
        })

    }

    return Producto
}

