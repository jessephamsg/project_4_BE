const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');
const kidControllers = require('../controllers/kidControllers');
const gameControllers = require('../controllers/gameControllers');
const authControllers = require('../controllers/authControllers')
const { ensureAuth } = require('../services/config/ensureAuth') // ensure there is a user session before proceeding


router.get('/', parentControllers.getAllParents);
router.get('/parents', ensureAuth, parentControllers.getAllParents);
router.get('/parents/:idx', parentControllers.getParentByID);
router.post('/parents', parentControllers.createOneParent);
router.put('/parents/:idx', ensureAuth, parentControllers.updateOneParent);
router.put('/parents/change/:idx', ensureAuth, parentControllers.changePwdOneParent);
router.put('/parents/add/:idx', ensureAuth, parentControllers.addKidtoParent);
router.put('/parents/del/:idx/:kidx', ensureAuth, parentControllers.deleteKidfromParent);

router.get('/kids/:idx', kidControllers.getKidByID);
router.post('/kids', kidControllers.createOneKid);
router.put('/kids/:idx', ensureAuth, kidControllers.updateOneKid);
router.put('/kids/start/:idx/:gidx', ensureAuth, kidControllers.kidStartGame);
router.put('/kids/stop/:idx/:gidx', ensureAuth, kidControllers.kidStopGame);
router.delete('/kids/:idx', kidControllers.deleteOneKid);

router.get('/games/:idx', gameControllers.getGameByID);
router.post('/games', ensureAuth, gameControllers.createOneGame);
router.put('/games/:idx', ensureAuth, gameControllers.updateOneGame); 
router.delete('/games/:idx', ensureAuth, gameControllers.deleteOneGame);

router.post('/login', authControllers.login); // logging in with user input with username and password
router.post('/isAuthenticated', authControllers.isAuthenticated) // get parent data from id stored in localstorage
router.get('/user', authControllers.getUser)
router.get('/logout', authControllers.logout);

module.exports = router;
