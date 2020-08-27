const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');
const bcrypt = require('bcrypt')

module.exports = {
    async getAll(req, res) {
        try {
            const results = await parentServices.getAll();
            responseFormatter.responseOK(req, res, results);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async getByID(req, res) {
        try {
            const parentID = req.params.idx;
            const result = await parentServices.getByID(parentID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async getByName(req, res) {
        try {
            const parentUsername = req.body.username;
            const result = await parentServices.getByName(parentUsername);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOne(req, res) {
        try {
            const {
                name,
                email,
                password
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // hashed the password
            await parentServices.createOne({
                name,
                email,
                password: hashedPassword,
            })
            responseFormatter.responseOK(req, res, 'createOne is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOne(req, res) {
        try {
            const parentID = req.params.idx;
            const {
                name,
                email,
            } = req.body;

            await parentServices.updateOne(parentID, {
                name,
                email,
            })
            responseFormatter.responseOK(req, res, 'updateOne is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteOne(req, res) {
        try {
            const parentID = req.params.idx;
            await parentServices.deleteOne(parentID)
            responseFormatter.responseOK(req, res, 'deleteOne is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async changePwd(req, res) {
        try {
            const parentID = req.params.idx;
            const {
                password,
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // hashed the password
            await parentServices.updateOne(parentID, {
                password: hashedPassword,
            })
            responseFormatter.responseOK(req, res, 'changePwd is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async addKid(req, res) {
        try {
            const parentID = req.params.idx;
            const {
                kidID,
            } = req.body;

            await parentServices.addKid(parentID, {
                kidID,
            })
            responseFormatter.responseOK(req, res, 'addKid is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteKid(req, res) {
        try {
            const parentID = req.params.idx;
            const kidID = req.params.kidx;
            await parentServices.deleteKid(parentID, kidID)
            responseFormatter.responseOK(req, res, 'deleteKid is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}