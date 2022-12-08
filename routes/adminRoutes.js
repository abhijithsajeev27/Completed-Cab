const express = require("express");

const driverControllers = require("../controllers/driverController");
const passengerController = require('../controllers/passengerControler')
const adminController = require('../controllers/adminController')

const router = express.Router();
router.get("/admin/login", adminController.login);
router.post("/admin/login", adminController.loginPost);
router.get("/admin/driver/", driverControllers.index);
router.get("/admin/passenger/", passengerController.index);
router.get("/admin/trip/report", adminController.report);
router.post("/admin/trip/report", adminController.reportPost);


module.exports = router;
