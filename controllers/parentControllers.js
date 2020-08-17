const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');
const bcrypt = require('bcrypt')
const passport = require("passport")

module.exports = {
    login (req,res,next) {
        passport.authenticate("local", 
            {
                successRedirect: '/success', // redirecting does not work
                failureRedirect: '/unsuccess', // redirecting may be done on frontend
                failureFlash : 'invalid username or password'
            },
            (err, user, info) => {
            if(err) throw err;
            if(!user) responseformatter.responseErr(req, res, err)
            //res.status(400).send("no user exists");
            else {
                req.login(user, (err) => {
                    if(err) throw err;
                    res.status(201).send(`Successfully AAAAuthenticated with ${req.session.passport.user}`)
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
                parentName,
                parentEmail,
                parentPassword
            })
            responseFormatter.responseOK(req, res, 'One Parent successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneParent(req, res) {
        const parentID = req.params.idx;
        try {
            const {
                parentName,
                parentEmail,
                parentPassword
            } = req.body;

            await parentServices.updateOneParent(parentID, {
                parentName,
                parentEmail,
                parentPassword
            })
            responseFormatter.responseOK(req, res, 'One Parent successfully updated!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async addOneKidtoParent(req, res) {
        const parentID = req.params.idx;
        try {
            const {
                kidID,
                kidName,
            } = req.body;

            await parentServices.addOneKidtoParent(parentID, {
                kidID,
                kidName,
            })
            responseFormatter.responseOK(req, res, 'Kid of Parent successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneKidofParent(req, res) {
        const parentID = req.params.idx;
        const kidID = req.params.kidx;
        try {
            const {
                kidName,
            } = req.body;

            await parentServices.updateOneKidofParent(parentID, {
                kidID,
                kidName,
            })
            responseFormatter.responseOK(req, res, 'Kid of Parent successfully updated!');
        } catch (err) {
            console.log('err@updateOneKidofParent@parentController: ',err);
            responseFormatter.responseErr(req, res, err);
        }
    }
}