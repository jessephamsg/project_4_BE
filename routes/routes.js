const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');

router.get('/', parentControllers.getAllParents);
router.get('/parent', parentControllers.getAllParents);
router.post('/parent', parentControllers.createOneParent);
router.put('/parent/:idx', parentControllers.updateOneParent);
router.get('/parent/:idx', parentControllers.getParentByID);

module.exports = router;
