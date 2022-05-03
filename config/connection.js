const Sequelize= require("sequelize");
require("dotenv").config();

const sequelize= new Sequelize(
    "employees_db",
    "root",
    "root",
    {
        host:"localhost",
        dialect:"mysql",
        logging: false,
        port: 3306
    }
);

module.exports = sequelize;
