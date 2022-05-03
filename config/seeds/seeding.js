const connection = require("../connection");

const Department = require("../models/department");
const Role= require("../models/role");
const Employee= require("../models/employee");

const dSeeds = require("./depSeeds.json");
const rSeeds = require("./roleSeeds.json");
const eSeeds = require("./empSeeds.json");

const seedDatabase = async () =>{
    await connection.sync({force:true});
    await Department.bulkCreate(dSeeds);
    await Role.bulkCreate(rSeeds);
    for(const row of eSeeds){
        await Employee.create(row);
    }
    process.exit(0);
}

seedDatabase();