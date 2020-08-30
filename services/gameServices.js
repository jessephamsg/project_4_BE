const gameRepositories = require('../repositories/gameRepositories');


module.exports = {

    async getByID(gameID) {
        const game = await gameRepositories.getByID(gameID);
        return game;
    },

    async getByName(gameName) {
        const game = await gameRepositories.getByFilter({name: gameName});
        return game;
    },

    async createOne(newGame) {
        const game = await gameRepositories.createOne(newGame);
        return game;
    },

    async updateOne(gameID, gameData) {
        const game = await gameRepositories.updateOne(gameID, gameData);
        return game;
    },

    async deleteOne(gameID) {
        const game = await gameRepositories.deleteOne(gameID);
        return game;
    },

}