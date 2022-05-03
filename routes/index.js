const router= require('express').Router();
const eRoutes= require("./employeeRoutes");
const rRoutes= require("./roleRoutes");
const dRoutes= require("./departmentRoutes");

router.use("/employees", eRoutes);
router.use("/roles", rRoutes);
router.use("/departments", dRoutes);


module.exports= router;