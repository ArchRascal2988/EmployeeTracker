const {Model, DataTypes, INTEGER, Deferrable} = require("Sequelize");
const sequelize= require("../connection");
const Department = require("./department");

class Role extends Model{};

Role.init(
    {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        salary:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        dep_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Department,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName:"Role"
    }
);

module.exports= Role;