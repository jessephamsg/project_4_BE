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
    async getAll() {
        try {
            const results = await this.getByFilter({});
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getAll', err));
        }
    },
    async getByID(ParentsID) {
        try {
            const result = await Parents.findById(ParentsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },
    async getByName(username) {
        try {
            const result = await Parents.findOne({ parentName: username });
            if (!result) {
                throw new Error(errUtils.buildDBErrMessage('username does not exist', err));
            }
            return result
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByName', err));
        }
    },
    async createOne(newParent) {
        try {
            const result = await Parents.create(newParent);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    },
    async updateOne(parentID, parentData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, parentData);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOne', err));
        }
    },
    async deleteOne(parentID) {
        try {
            const result = await Parents.findByIdAndRemove(parentID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOne', err));
        }
    },
    async addKid(parentID, kidData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, {
                $push: { kidsList: kidData }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('addKid', err));
        }
    },
    async deleteKid(parentID, kidID) {
        try {
            const result = await Parents.updateOne({ _id: parentID }, {
                "$pull": { "kidsList": { "kidID": kidID } }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteKid', err));
        }
    },
}