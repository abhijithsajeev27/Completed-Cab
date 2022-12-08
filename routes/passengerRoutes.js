const express = require("express");
const passengerControlers = require("../controllers/passengerControler");
const tripController = require('../controllers/tripController')

const router = express.Router();

router.get("/passenger", passengerControlers.index);
// router.get("/passenger/create", passengerControlers.createPhone);
// router.post("/passenger/create", passengerControlers.createPostPhone);
router.get("/passenger/createNext", passengerControlers.create);
router.post("/passenger/createNext", passengerControlers.createPost);
router.get("/passenger/update/:id", passengerControlers.update);
router.post("/passenger/update/:id", passengerControlers.updatePost);

router.get("/passenger/delete/:id", passengerControlers.delete);


module.exports = router;
