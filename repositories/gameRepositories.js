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
    async getGameByID(GamesID) {
        try {
            const result = await Games.findById(GamesID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getGameByID', err));
        }
    },
    async createOneGame(newGame) {
        try {
            const result = await Games.create(newGame);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOneGame', err));
        }
    },
    async updateOneGame(gameID, gameData) {
        try {
            const result = await Games.findByIdAndUpdate(gameID, {
                $set: gameData
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOneGame', err));
        }
    },
    async deleteOneGame(gameID) {
        try {
            const result = await Games.findByIdAndRemove(gameID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOneGame', err));
        }
    },
}