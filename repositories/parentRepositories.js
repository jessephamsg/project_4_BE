const Parents = require('../models/Parents');
const errUtils = require('./utils/error');
const parentServices = require('../services/parentServices');

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
    async createOneParent(newParent) {
        try {
            const result = await Parents.create(newParent);
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
    },
    async addOneKidtoParent(parentID, kidData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, {
                $push: { kidsList: kidData }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('addOneKidtoParent', err));
        }
    },
    async updateOneKidofParent(parentID, kidData) {
        try {
            const result = await Parents.findOneAndUpdate({
                "_id" : parentID,
                "kidsList.kidID" : kidData.kidID
            }, {
                $set: { "kidsList.$.kidName": kidData.kidName }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOneKidofParent', err));
        }
    },
    async getByUsername(username) {
        try {
            const result = await Parents.findOne({ parentName: username});
            if (!result) {
                throw new Error(errUtils.buildDBErrMessage('username does not exist', err));
            }
            return result
        } catch(err) {
            throw new Error(errUtils.buildDBErrMessage('getByUsername', err));
        }
    }
}