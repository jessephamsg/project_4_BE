const passport = require("passport")
const parentServices = require('../services/parentServices')
const responseFormatter = require('../services/shared/responseFormatter');
const authServices = require("../services/authServices");
const checkAuthService = require("../services/checkAuthService");


module.exports = {

    login(req, res, next) {
        passport.authenticate("local",
            (err, user, info) => {
                if (err) throw err;
                if (!user) res.status(400).send(info.message);
                else {
                    req.login(user, (err) => {
                        if (err) throw err;
                        const {
                            _id,
                            name
                        } = req.user
                        res.status(200).send({
                            isAuthenticated: true,
                            currentUser: {
                                _id,
                                name
                            }
                        })
                    })
                }
            })(req, res, next);
    },

    async isAuthenticated(req, res) {
        try {
            const id = req.body.id
            const result = await parentServices.getByID(id)
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    getUser(req, res) {
        responseFormatter.responseOK(req, res, req.user);
    },

    logout(req, res) {
        req.logout();
        responseFormatter.responseOK(req, res, 'user logged out');
    },
    async checkPassword(req,res) {
        const passwordTocheck = req.body.password
        const parentId = req.params.id
        try {
            const result = await checkAuthService.checkPassword(passwordTocheck,parentId)
            responseFormatter.responseOK(req, res, result)
        } catch(err) {
            responseFormatter.responseErr(req, res, err);
        }
    }

}