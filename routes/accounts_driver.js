const express = require('express');
const controller = require('../controllers/accounts_driver');

const router = express.Router();

router.get('/driver/login', controller.login);
router.post('/driver/login', controller.loginPost);
router.get('/driver/register', controller.register);
router.post('/driver/register', controller.registerPost);

module.exports = router;