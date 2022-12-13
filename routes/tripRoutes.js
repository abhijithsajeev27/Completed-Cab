const express = require("express");

const tripControllers = require("../controllers/tripController");
const mapControllers = require("../controllers/mapController");
const router = express.Router();

router.get("/trip", tripControllers.index);
router.get("/trip/create", tripControllers.create);
router.post("/trip/create", tripControllers.createPost);

router.get("/trip/paymentConfirmation", mapControllers.fare);
router.post("/trip/bookingConfirmation", mapControllers.receipt);

router.get("/trip/passenger/report", mapControllers.passengerReport);
router.get("/trip/driver/report", mapControllers.driverReport);
router.get("/trip/update/:id", tripControllers.update);
router.post("/trip/update/:id", tripControllers.updatePost);
router.get("/trip/delete/:id", tripControllers.delete);
router.get("/invoice", tripControllers.createInvoice);
router.get("/fetch");
module.exports = router;
