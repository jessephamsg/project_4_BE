const Kids = require('../models/Kids');
const errUtils = require('./utils/error');


module.exports = {

    async getByFilter(filter) {
        try {
            const results = await Kids.find(filter);
            console.log(results)
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

    async addGameStats(kidID, gameStatsObj) {
        try {
            const result = await Kids.findOneAndUpdate({
                _id: kidID,
            }, {
                $push: {
                    'gamesStats': gameStatsObj,
                }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('addGameHistory', err));
        }
    },

    async updateGameStats (kidName, parentID, gameStatsIDArr) {
        try {
            await Kids.findByIdAndUpdate({
                name: kidName,
                parentID
            }, {
                $set: {
                    'gamesStats.gameStatsIDs': gameStatsIDArr
                }
            })
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateGameStats', err));
        }
    },

    async updateKidScore (kidName, parentID, index, updatedScore) {
        try {
            const kidObj = await Kids.findOne({
                name: kidName,
                parentID,
            })
            kidObj.gamesStats[index].totalScore = updatedScore;
            const updated = await kidObj.save();
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateKidScore', err));
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