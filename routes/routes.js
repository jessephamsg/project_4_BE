const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
// const accountControllers = controllers.accountControllers;


router.get('/', authControllers.getAll);

module.exports = router;
