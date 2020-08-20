const gameRepositories = require('../repositories/gameRepositories');

module.exports = {
    async getGameByID(gameID) {
        const game = await gameRepositories.getGameByID(gameID);
        return game;
    },
    async createOneGame(newGame) {
        const game = await gameRepositories.createOneGame(newGame);
        return game;
    },
    async updateOneGame(gameID, gameData) {
        const game = await gameRepositories.updateOneGame(gameID, gameData);
        return game;
    },
    async deleteOneGame(gameID) {
        const game = await gameRepositories.deleteOneGame(gameID);
        return game;
    },
}