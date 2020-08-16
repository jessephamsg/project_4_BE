const Parents = require('../models/Parents');
const errUtils = require('./utils/error');

module.exports = {
    async getByFilter(filter) {
        try {
            const results = await Parents.find(filter);
            return results
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err))
        }
    },
    async getAll() {
        try {
            const results = await this.getByFilter({});
            return results
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getAll', err));
        }
    },
    async getByID(ParentsID) {
        try {
            const result = await Parents.findById(ParentsID);
            return result
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },
    async createOne(newParents) {
        try {
            const result = await Parents.create(newParents);
            return result
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    }
}