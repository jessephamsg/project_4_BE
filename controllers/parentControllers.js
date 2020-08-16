const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');

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
    async createOneParent(req, res) {
        try {
            const {
                parentName,
                parentEmail,
                parentPassword
            } = req.body;

            await parentServices.createOneParent({
                parentName: parentName,
                parentEmail: parentEmail,
                parentPassword: parentPassword
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
                parentName: parentName,
                parentEmail: parentEmail,
                parentPassword: parentPassword
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
                kidID: kidID,
                kidName: kidName
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
                kidID: kidID,
                kidName: kidName
            })
            responseFormatter.responseOK(req, res, 'Kid of Parent successfully updated!');
        } catch (err) {
            console.log('err@updateOneKidofParent@parentController: ',err);
            responseFormatter.responseErr(req, res, err);
        }
    }
}