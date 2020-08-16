const parentServices = require('../services/parentServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    async getAllParents(req, res) {
        const results = await parentServices.getAllParents();
        try {
            responseFormatter.responseOK(req, res, results);
        } catch (err) {
            responseFormatter.responseNotFound(req, res, results);
        }
    },
    async getParentByID(req, res) {
        const parentID = req.params.index;
        const result = await parentServices.getParentByID(parentID);
        try {
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseNotFound(req, res, result);
        }
    },
    async createOneParent(req, res) {
        try {
            const {
                parentName,
                parentEmail,
                parentPassword
            } = req.body;
            const oneParent = await parentServices.createOneParent({
                parentName: parentName,
                parentEmail: parentEmail,
                parentPassword: parentPassword
            })
            authResponseFormatter.responseOK(res, oneParent, true, 'One Parent successfully added!', null)
        } catch (err) {
            authResponseFormatter.responseServerErr(res, null, false, null, err)
        }
    }
}