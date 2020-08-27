const GameHistory = require('../models/GameHistory');
const errUtils = require('./utils/error');

module.exports = {
    async getByFilter(filter) {
        try {
            const results = await GameHistory.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },
    async getByID(GameHistoryID) {
        try {
            const result = await GameHistory.findById(GameHistoryID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },
    async createOne(newGameHistory) {
        try {
            const result = await GameHistory.create(newGameHistory);
            return result;
            
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    },
    async updateOne(gameHistoryID, gameHistoryData) {
        try {
            const result = await GameHistory.findByIdAndUpdate(gameHistoryID, {
                $set: gameHistoryData
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOne', err));
        }
    },
    async deleteOne(gameHistoryID) {
        try {
            const result = await GameHistory.findByIdAndRemove(gameHistoryID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOne', err));
        }
    },
}