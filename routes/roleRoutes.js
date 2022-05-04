const router= require('express').Router();
const Role= require("../config/models/role");

router.get("/all", (req,res)=>{
    Role.findAll().then((data)=> res.json(data));
})

router.post("/new", (req,res)=>{
    try{
    Role.create({
        title: req.body.title,
        salary: req.body.salary,
        dep_id: req.body.dep_id
    }).then((data)=> {
        res.status(200).json(data);
    });
} catch(err){
    res.status(400).json(err);
}
})

module.exports= router;