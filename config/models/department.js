const {Model, DataTypes} = require("Sequelize");
const sequelize= require("../connection");

class Department extends Model{};

Department.init(
    {
        dep_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName:"Department"
    }
);

module.exports= Department