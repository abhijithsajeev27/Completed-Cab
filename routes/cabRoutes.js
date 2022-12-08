const express = require("express");

const cabControllers = require("../controllers/cabController")

const router = express.Router();

router.get("/cab", cabControllers.index);
router.get("/cab/create", cabControllers.create);
router.post("/cab/create", cabControllers.createPost);
router.get("/cab/update/:id", cabControllers.update);
router.post("/cab/update/:id", cabControllers.updatePost);
router.get("/cab/delete/:id", cabControllers.delete);

module.exports = router;
