const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');
const bcrypt = require('bcrypt')

module.exports = {
    async getAllParents(req, res) {
        try {
            const results = await parentServices.getAllParents();
            responseFormatter.responseOK(req, res, results);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async getParentByID(req, res) {
        try {
            const parentID = req.params.idx;
            const result = await parentServices.getParentByID(parentID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async getParentByUsername(req, res) {
        try {
            const parentUsername = req.body.username;
            const result = await parentServices.getParentByUsername(parentUsername);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOneParent(req, res) {
        try {
            const {
                name,
                email,
                password
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // hashed the password
            await parentServices.createOneParent({
                name,
                email,
                password: hashedPassword,
            })
            responseFormatter.responseOK(req, res, 'createOneParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneParent(req, res) {
        try {
            const parentID = req.params.idx;
            const {
                name,
                email,
            } = req.body;

            await parentServices.updateOneParent(parentID, {
                name,
                email,
            })
            responseFormatter.responseOK(req, res, 'updateOneParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async changePwdOneParent(req, res) {
        try {
            const parentID = req.params.idx;
            const {
                password,
            } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // hashed the password
            await parentServices.updateOneParent(parentID, {
                password: hashedPassword,
            })
            responseFormatter.responseOK(req, res, 'changePwdOneParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async addKidtoParent(req, res) {
        try {
            const parentID = req.params.idx;
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
        try {
            const parentID = req.params.idx;
            const kidID = req.params.kidx;
            await parentServices.deleteKidfromParent(parentID, kidID)
            responseFormatter.responseOK(req, res, 'deleteKidfromParent is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}