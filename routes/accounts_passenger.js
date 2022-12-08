const express = require('express');
const controller = require('../controllers/accounts_passenger');

const router = express.Router();

router.get('/passenger/login', controller.login);
router.post('/passenger/login', controller.loginPost);
router.get('/passenger/register', controller.register);
router.post('/passenger/register', controller.registerPost);

module.exports = router;