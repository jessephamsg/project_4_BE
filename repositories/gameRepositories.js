const Games = require('../models/Games');
const errUtils = require('./utils/error');

module.exports = {
    async getByFilter(filter) {
        try {
            const results = await Games.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },
    async getByID(GamesID) {
        try {
            const result = await Games.findById(GamesID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },
    async createOne(newGame) {
        try {
            const result = await Games.create(newGame);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    },
    async updateOne(gameID, gameData) {
        try {
            const result = await Games.findByIdAndUpdate(gameID, {
                $set: gameData
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOne', err));
        }
    },
    async deleteOne(gameID) {
        try {
            const result = await Games.findByIdAndRemove(gameID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOne', err));
        }
    },
}