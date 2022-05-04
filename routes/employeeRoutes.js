const router= require('express').Router();
const Employee= require("../config/models/employee");

router.get("/all", (req,res)=>{
    Employee.findAll().then((data)=> res.json(data));
})

router.post("/new", (req,res)=>{
    try{
    Employee.create({
        role_id: req.body.role_id,
    }).then((data)=> {
        res.status(200).json(data);
    });
}
    catch(err){
        res.status(400).json(err);
    }
})

router.put("/update", (req,res)=>{
    try{
    Employee.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role_id: req.body.role_id,
        manager_id: req.body.manager_id
    },
    {
        where:{
            id: req.body.id
        }
    }).then((data)=> res.json(data));
} catch(err){
    res.status(400).json(err);
}
});

module.exports= router;