const express = require("express");

const driverControllers = require("../controllers/driverController");

const router = express.Router();
router.get('/',driverControllers.homepage)
router.get("/driver", driverControllers.index);
router.get("/driver/create", driverControllers.create);
router.post("/driver/create", driverControllers.createPost);
router.get("/driver/update/:id", driverControllers.update);
router.post("/driver/update/:id", driverControllers.updatePost);
router.get("/driver/delete/:id", driverControllers.delete);
router.get("/driver/select", driverControllers.driverSelection);
// router.get("/driver/selectnext/", driverControllers.driverSelectionNext);
module.exports = router;
