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
    async getKidByID(KidsID) {
        try {
            const result = await Kids.findById(KidsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getKidByID', err));
        }
    },
    async createOneKid(newKid) {
        console.log(newKid);
        try {
            const result = await Kids.create(newKid);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOneKid', err));
        }
    },
    async updateOneKid(kidID, kidData) {
        try {
            const result = await Kids.findByIdAndUpdate(kidID, {
                $set: kidData
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOneKid', err));
        }
    },
    async kidRecGameAtStart(kidID, gameStartData) {
        try {
            const result = await Kids.findByIdAndUpdate(kidID, {
                $push: { gameHistory: gameStartData }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('kidRecGameAtStart', err));
        }
    },
    async kidRecGameAtStop(kidID, gameStopData) {
        try {
            const result = await Kids.findOneAndUpdate({
                "_id": kidID,
                "gameHistory.gameID": gameStopData.gameID
            }, {
                $set: {
                    "gameHistory.$.timeStopPlay": gameStopData.timeStopPlay,
                    "gameHistory.$.currentScore": gameStopData.currentScore
                }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('kidRecGameAtStop', err));
        }
    },
}