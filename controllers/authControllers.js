const passport = require("passport")
const parentServices = require('../services/parentServices')
const responseFormatter = require('../services/shared/responseFormatter');


module.exports = {

    login(req, res, next) {
        console.log('req.body', req.body)
        passport.authenticate("local",
            (err, user, info) => {
                if (err) throw err;
                if (!user) res.status(400).send("no user exists", info.messages);
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
            console.log(result.name)
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    getUser(req, res) {
        console.log(req.user)
        responseFormatter.responseOK(req, res, req.user);
    },

    logout(req, res) {
        req.logout();
        responseFormatter.responseOK(req, res, 'user logged out');
    },

}