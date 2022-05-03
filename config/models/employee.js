const {Model, DataTypes} = require("Sequelize");
const sequelize= require("../connection");
const Role = require("./role");

class Employee extends Model{
};

Employee.init(
    {
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Role,
                key: "id"
            }
        },
        manager_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Employee,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName:"Employee"
    }
);

module.exports= Employee;