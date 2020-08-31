const Kids = require('../models/Kids');
const errUtils = require('./utils/error');


module.exports = {

    async getByFilter(filter) {
        try {
            const results = await Kids.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },

    async getByID(KidsID) {
        try {
            const result = await Kids.findById(KidsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },

    async getAllByParentID(parentID) {
        try {
            const result = await this.getByFilter({
                parentID: parentID
            })
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getAllByParentID', err))
        }
    },

    async createOne(newKid) {
        try {
            const result = await Kids.create(newKid);
            return result;

        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    },

    async updateOne(kidID, kidData) {
        try {
            const result = await Kids.findByIdAndUpdate(kidID, {
                $set: kidData
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOne', err));
        }
    },

    async addGameHistory(kidID, gameHistoryData) {
        try {
            const gameID = gameHistoryData.gameID;
            const gameHistoryID = gameHistoryData.gameHistoryID;
            const result = await Kids.findOneAndUpdate({
                "_id": kidID,
                "gamesPlayed.gameID": gameHistoryData.gameID
            }, {
                $push: {
                    "gameStat.gameHistoryID": gameHistoryData.gameHistoryID,
                }
            });
            console.log("result@addGameHistory@kidRepo: ", result)
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('addGameHistory', err));
        }
    },

    async deleteOne(kidID) {
        try {
            const result = await Kids.findByIdAndRemove(kidID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOne', err));
        }
    },

}