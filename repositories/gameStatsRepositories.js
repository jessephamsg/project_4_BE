const GameStats = require('../models/GameStats');
const errUtils = require('./utils/error');


module.exports = {

    async getByFilter(filter) {
        try {
            const results = await GameStats.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },

    async getByID(GameStatsID) {
        try {
            const result = await GameStats.findById(GameStatsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },

    async createOne(newGameStats) {
        try {
            const result = await GameStats.create(newGameStats);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    },

    async updateOne(gameID, level, gameStatsData) {
        const {startTime, endTime, score, attemptsBeforeSuccess, numberOfPauses} = gameStatsData;
        try {
            const result = await GameStats.findOneAndUpdate({
                gameID,
                level
            }, {
                $set: {
                    attemptsBeforeSuccess,
                    numberOfPauses, 
                    score
                },
                $push: {
                    startTime,
                    endTime
                },
            })
            return result
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOne', err));
        }
    },

    async deleteOne(gameStatsID) {
        try {
            const result = await GameStats.findByIdAndRemove(gameStatsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOne', err));
        }
    },
}