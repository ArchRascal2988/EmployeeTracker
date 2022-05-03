const router= require('express').Router();
const Department= require("../config/models/department");

router.get("/all", (req,res)=>{
    Department.findAll().then((data)=> res.json(data));
})

router.post("/new", (req,res)=>{
    Department.Create({name: req.body.name}).then((data)=> {
        res.json(data);
        console.log("Sucessful Insertion.")
    });
})

module.exports= router;