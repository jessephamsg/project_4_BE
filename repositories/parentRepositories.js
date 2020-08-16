const Parents = require('../models/Parents');
const errUtils = require('./utils/error');

module.exports = {
    async getByFilter(filter) {
        try {
            const results = await Parents.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },
    async getAllParents() {
        try {
            const results = await this.getByFilter({});
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getAllParents', err));
        }
    },
    async getParentByID(ParentsID) {
        try {
            const result = await Parents.findById(ParentsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getParentByID', err));
        }
    },
    async createOneParent(newParents) {
        try {
            const result = await Parents.create(newParents);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOneParent', err));
        }
    },
    async updateOneParent(parentID, parentData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, parentData);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOneParent', err));
        }
    }
}