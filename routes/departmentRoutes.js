const router= require('express').Router();
const Department= require("../config/models/department");

router.get("/all", (req,res)=>{
    Department.findAll().then((data)=> res.json(data));
})

router.post("/new", (req,res)=>{
    try{
    Department.create({name: req.body.name}).then((data)=> {
        res.status(200).json(data);
    });
}
catch(err){
    res.status(200).json(err);
}
})

module.exports= router;