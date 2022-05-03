const router= require('express').Router();
const Employee= require("../config/models/employee");

router.get("/all", (req,res)=>{
    Employee.findAll.then((data)=> res.json(data));
})

router.post("/new", (req,res)=>{
    Employee.Create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role_id: req.body.role_id,
        manager_id: req.body.manager_id
    }).then((data)=> {
        res.json(data);
        console.log("Sucessful Insertion.")
    });
})

router.put("/update")

module.exports= router;