const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');
const kidControllers = require('../controllers/kidControllers');

//naming convention: routes of the same type (i.e. related to the same group of controllers), name them by their group
//(e.g parents/ kids/ games/ auth)

router.get('/', parentControllers.getAllParents);
router.get('/parent', parentControllers.getAllParents); //parents

router.get('/parent/:idx', parentControllers.getParentByID); //parents/:idx
router.post('/parent', parentControllers.createOneParent);//parents/:idx
router.put('/parent/:idx', parentControllers.updateOneParent);//parents/:idx
router.put('/parentaddkid/:idx', parentControllers.addOneKidtoParent);//kids/:idx -- addOneKid -- this is post not put
router.put('/parenteditkid/:idx/:kidx', parentControllers.updateOneKidofParent);//kids/:idx -- updateOneKid

router.get('/kid/:idx', kidControllers.getKidByID); //kids/:idx
router.post('/kid', kidControllers.createOneKid); //this is similar to the one above addOneKidtoParent?
router.put('/kid/:idx', kidControllers.updateOneKid); //this is similar to the one above updateOneKidofParent?
router.put('/kidRecGameAtStart/:idx', kidControllers.kidRecGameAtStart); //should not have too specific route name like this. --> kids/:idx/stats
router.put('/kidRecGameAtStop/:idx/:gidx', kidControllers.kidRecGameAtStop); ////should not have too specific route name like this. --> kids/:idx/stats

router.get('/success', (req,res) => {res.send(`success with`, req.user)});
router.get('/unsuccess', (req,res) => {res.send(`unsuccess with${messages.error}`)});
router.post('/login', parentControllers.login); // logging in with user input with username and password

module.exports = router;
