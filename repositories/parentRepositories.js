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
    async getParentByUsername(username) {
        try {
            const result = await Parents.findOne({ username: username });
            if (!result) {
                throw new Error(errUtils.buildDBErrMessage('username does not exist', err));
            }
            return result
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getParentByUsername', err));
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
    async addKidtoParent(parentID, kidData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, {
                $push: { kidsList: kidData }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('addKidtoParent', err));
        }
    },
    async deleteKidfromParent(parentID, kidID) {
        
        console.log("parentID@deleteKidfromParent@parentREpositories", parentID);
        console.log("kidID@deleteKidfromParent@parentREpositories", kidID);
        try {
            const result = await Parents.updateOne({ _id: parentID }, {
                "$pull": { "kidsList": { "kidID": kidID } }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteKidfromParent', err));
        }
    },
}