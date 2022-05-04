const express= require("express");
const sequelize= require('./config/connection');
const routes= require("./routes");
const init= require("./index");


const models= require("./config/models");

const app= express();
const PORT= process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",routes);

sequelize.sync({force:false}).then(async ()=>{
 app.listen(PORT, ()=> console.log("Now listening"));
}).then(async ()=> await init);

