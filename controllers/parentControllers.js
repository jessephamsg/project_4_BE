const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');
const bcrypt = require('bcrypt')

module.exports = {
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
        console.log('parentcontroller', req.body)
        try {
            const {
                username,
                email,
                password
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // hashed the password
            await parentServices.createOneParent({
                username,
                email,
                password : hashedPassword,
            })
            responseFormatter.responseOK(req, res, 'createOneParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneParent(req, res) {
        const parentID = req.params.idx;
        try {
            const {
                username,
                email,
            } = req.body;

            await parentServices.updateOneParent(parentID, {
                username,
                email,
            })
            responseFormatter.responseOK(req, res, 'updateOneParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async changePwdOneParent(req, res) {
        const parentID = req.params.idx;
        try {
            const {
                password,
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // hashed the password
            await parentServices.updateOneParent(parentID, {
                password : hashedPassword,
            })
            responseFormatter.responseOK(req, res, 'changePwdOneParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async addKidtoParent(req, res) {
        const parentID = req.params.idx;
        try {
            const {
                kidID,
            } = req.body;

            await parentServices.addKidtoParent(parentID, {
                kidID,
            })
            responseFormatter.responseOK(req, res, 'addKidtoParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteKidfromParent(req, res) {
        const parentID = req.params.idx;
        const kidID = req.params.kidx;
        try {
            await parentServices.deleteKidfromParent(parentID, kidID)
            responseFormatter.responseOK(req, res, 'deleteKidfromParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}