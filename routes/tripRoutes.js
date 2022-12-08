const express = require("express");

const tripControllers = require("../controllers/tripController")
const mapControllers = require('../controllers/mapController')
const router = express.Router();

router.get("/trip", tripControllers.index);
router.get("/trip/create", tripControllers.create);
router.post("/trip/create", tripControllers.createPost);
router.get("/trip/confirmation", mapControllers.fare);
router.get("/trip/update/:id", tripControllers.update);
router.post("/trip/update/:id", tripControllers.updatePost);
router.get("/trip/delete/:id", tripControllers.delete);
router.get('/fetch')
module.exports = router;
