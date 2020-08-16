const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');
const kidControllers = require('../controllers/kidControllers');

router.get('/', parentControllers.getAllParents);
router.get('/parent', parentControllers.getAllParents);
router.get('/parent/:idx', parentControllers.getParentByID);
router.post('/parent', parentControllers.createOneParent);
router.put('/parent/:idx', parentControllers.updateOneParent);
router.put('/parentaddkid/:idx', parentControllers.addOneKidtoParent);
router.put('/parenteditkid/:idx/:kidx', parentControllers.updateOneKidofParent);

router.post('/kid', kidControllers.createOneKid);

module.exports = router;
