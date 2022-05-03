const router= require('express').Router();
const Role= require("../config/models/role");

router.get("/all", (req,res)=>{
    Role.findAll.then((data)=> res.json(data));
})

router.post("/new", (req,res)=>{
    Role.Create({
        title: req.body.title,
        salary: req.body.salary,
        dep_id: req.body.dep_id
    }).then((data)=> {
        res.json(data);
        console.log("Sucessful Insertion.")
    });
})

module.exports= router;