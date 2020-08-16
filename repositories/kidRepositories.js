const Kids = require('../models/Kids');
const errUtils = require('./utils/error');

module.exports = {
   
    async createOneKid(newKid) {
        console.log(newKid);
        try {
            const result = await Kids.create(newKid);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOneKid', err));
        }
    },
}