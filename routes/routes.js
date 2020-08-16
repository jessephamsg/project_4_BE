const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');

router.get('/', parentControllers.getAllParents);
router.get('/parent', parentControllers.getAllParents);
router.post('/parent', parentControllers.createOneParent); // want to change the route to '/register? - Yue Jia//
router.get('/parent/:idx', parentControllers.getParentByID);

router.post('/login', parentControllers.login); // logging in with user input with username and password

module.exports = router;
