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
            console.log('err@CreateOneParent@parentController: ',err);
            responseFormatter.responseErr(req, res, err);
        }
    }
}