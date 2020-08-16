const Parents = require('../models/Parents');
const errUtils = require('./utils/error');
const parentServices = require('../services/parentServices');

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
            const results = await Parents.find({});
            console.log('getAll@repo: ',results);
            return results;
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
    },
    async getByUsername(username) {
        try {
            const result = await Parents.find({ parentName: username});
            if (!result) {
                throw new Error(errUtils.buildDBErrMessage('username does not exist', err));
            }
            return result
        } catch(err) {
            throw new Error(errUtils.buildDBErrMessage('getByUsername', err));
        }
    }
}