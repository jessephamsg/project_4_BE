const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');
const kidControllers = require('../controllers/kidControllers');
const gameHistoryControllers = require('../controllers/gameHistoryControllers');
const gameControllers = require('../controllers/gameControllers');
const authControllers = require('../controllers/authControllers')
const { ensureAuth } = require('../services/config/ensureAuth') // ensure there is a user session before proceeding


router.get('/', parentControllers.getAll);
router.get('/parents', ensureAuth, parentControllers.getAll);
router.get('/parents/:idx', parentControllers.getByID);
router.post('/parents', parentControllers.createOne);
router.put('/parents/:idx', ensureAuth, parentControllers.updateOne);
router.put('/parents/:idx/change', ensureAuth, parentControllers.changePwd);
router.put('/parents/:idx/add', ensureAuth, parentControllers.addKid);
router.put('/parents/:idx/del/:kidx', ensureAuth, parentControllers.deleteKid);
router.delete('/parents/:idx', ensureAuth, parentControllers.deleteOne);

router.get('/kids/:idx', kidControllers.getByID);
router.get('/kids/all/:parentidx', kidControllers.getAllChildByParentID)
router.post('/kids', kidControllers.createOne);
router.put('/kids/:idx', kidControllers.updateOne);
router.delete('/kids/:idx', kidControllers.deleteOne);
router.post('/kids/:idx/start/:gidx', gameHistoryControllers.createOne); //startGame
router.put('/kids/:idx/stop/:gidx', gameHistoryControllers.updateOne); //stopGame

router.get('/games/:idx', gameControllers.getByID);
router.post('/games', ensureAuth, gameControllers.createOne);
router.put('/games/:idx', ensureAuth, gameControllers.updateOne); 
router.delete('/games/:idx', ensureAuth, gameControllers.deleteOne);

router.post('/login', authControllers.login); // logging in with user input with username and password
router.post('/isAuthenticated', authControllers.isAuthenticated) // get parent data from id stored in localstorage
router.get('/user', authControllers.getUser)
router.get('/logout', authControllers.logout);

module.exports = router;
