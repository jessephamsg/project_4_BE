const express = require('express');
const router = express.Router();
const parentControllers = require('../controllers/parentControllers');
const kidControllers = require('../controllers/kidControllers');
const gameStatsControllers = require('../controllers/gameStatsControllers');
const gameControllers = require('../controllers/gameControllers');
const authControllers = require('../controllers/authControllers')
const { ensureAuth } = require('../services/config/ensureAuth') // ensure there is a user session before proceeding


//REQUIRING PARENTSCONTROLLERS
router.get('/', parentControllers.getAll);
router.get('/parents', ensureAuth, parentControllers.getAll);
router.get('/parents/:idx', parentControllers.getByID);
router.post('/parents', parentControllers.createOne);
router.put('/parents/:idx', ensureAuth, parentControllers.updateOne);
router.put('/parents/:idx/change', ensureAuth, parentControllers.changePwd);
router.put('/parents/:idx/add', ensureAuth, parentControllers.addKid);
router.put('/parents/:idx/del/:kidx', ensureAuth, parentControllers.deleteKid);
router.delete('/parents/:idx', ensureAuth, parentControllers.deleteOne);


//REQUIRING KIDSCONTROLLERS
router.get('/kids/:kidName', kidControllers.getOneByNameAndParentID);
router.get('/kids/:idx', kidControllers.getByID);
router.get('/kids/:kidName/report', kidControllers.getChildStatsByNameAndParentID);
router.get('/kids/all/:parentidx', kidControllers.getAllChildByParentID)
router.post('/kids', kidControllers.createOne);
router.put('/kids/:idx', kidControllers.updateOne);
router.delete('/kids/:idx', kidControllers.deleteOne);


//REQUIRING GAMETSTATSCONTROLLERS
router.get('/stats/:idx', gameStatsControllers.getByID);
router.post('/kids/:kidName/game/:gidx', gameStatsControllers.createOne); 
router.put('/kids/:kidName/game/:gidx', gameStatsControllers.updateOne); 


//REQUIRING GAMECONTROLLERS
router.get('/games', gameControllers.getAll);
router.get('/games/:gameName', gameControllers.getByName);
router.get('/game/:idx', gameControllers.getByID);
router.post('/games', ensureAuth, gameControllers.createOne);
router.put('/games/:idx', ensureAuth, gameControllers.updateOne); 
router.delete('/games/:idx', ensureAuth, gameControllers.deleteOne);


//REQUIRING AUTHCONTROLLERS
router.post('/login', authControllers.login); // logging in with user input with username and password
router.post('/isAuthenticated', authControllers.isAuthenticated) // get parent data from id stored in localstorage
router.get('/user', authControllers.getUser)
router.get('/logout', authControllers.logout);
router.post('/checkPassword/:id',authControllers.checkPassword)

module.exports = router;
