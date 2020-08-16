const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');
const bcrypt = require('bcrypt')
const passport = require("passport")

module.exports = {
    async login (req,res,next) {
        passport.authenticate('local', {
            successRedirect : '/',
            failureRedirect : '/login',
            failureFlash : true // display error message specificed in authService.js
        }, (err, user) => {
            if(err) throw err;
            if(!user) res.status(400).send("no user exists");
            else {
                req.login(user, (err) => {
                    if(err) throw err;
                    res.status(201).send('success!')
                })
            }
        })(req,res,next);
    },
    async getAllParents(req, res) {
        const results = await parentServices.getAllParents();
        try {
            responseFormatter.responseOK(req, res, results);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async getParentByID(req, res) {
        const parentID = req.params.idx;
        const result = await parentServices.getParentByID(parentID);
        try {
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async getParentByUsername(req, res) {
        const parentUsername = req.body.username;
        const result = await parentServices.getParentByUsername(parentUsername);
        try {
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOneParent(req, res) {
        try {
            const {
                parentName,
                parentEmail,
                parentPassword
            } = req.body;
            const hashedPassword = await bcrypt.hash(parentPassword, 10); // hashed the password
            await parentServices.createOneParent({
                parentName: parentName,
                parentEmail: parentEmail,
                parentPassword: hashedPassword 
            })
            responseFormatter.responseOK(req, res, 'One Parent successfully added!');
        } catch (err) {
            console.log('err@CreateOneParent@parentController: ',err);
            responseFormatter.responseErr(req, res, err);
        }
    }
}