const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');
const kidControllers = require('../controllers/kidControllers');
const { ensureAuth } = require('../services/config/ensureAuth') // ensure there is a user session before proceeding

router.get('/', parentControllers.getAllParents);
router.get('/parent', ensureAuth, parentControllers.getAllParents);

router.get('/parent/:idx', parentControllers.getParentByID);
router.post('/parent', parentControllers.createOneParent);
router.put('/parent/:idx', parentControllers.updateOneParent);
router.put('/parentaddkid/:idx', parentControllers.addOneKidtoParent);
router.put('/parenteditkid/:idx/:kidx', parentControllers.updateOneKidofParent);

router.get('/kid/:idx', kidControllers.getKidByID);
router.post('/kid', kidControllers.createOneKid);
router.put('/kid/:idx', kidControllers.updateOneKid);
router.put('/kidRecGameAtStart/:idx', kidControllers.kidRecGameAtStart);
router.put('/kidRecGameAtStop/:idx/:gidx', kidControllers.kidRecGameAtStop);

router.get('/success', (req,res) => {res.send(`success with`, req.user)}); // trying to redirect this route upon successful login
router.get('/unsuccess', (req,res) => {res.send(`unsuccess with${messages.error}`)}); // trying to redirect this route upon unsuccessful login
router.post('/login', parentControllers.login); // logging in with user input with username and password

module.exports = router;
