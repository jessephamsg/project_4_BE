const gameStatsRepositories = require('../repositories/gameStatsRepositories');


module.exports = {

    async getByID(gameStatsID) {
        const gameStats = await gameStatsRepositories.getByID(gameStatsID);
        return gameStats;
    },

    async createOne(gameStatsArr) {
        for (const newGameStats of gameStatsArr) {
            await gameStatsRepositories.createOne(newGameStats);
        }
        return
    },

    async updateOne(gameID, level, gameStatsData) {
        const gameStats = await gameStatsRepositories.updateOne(gameID, level, gameStatsData);
        return gameStats;
    },

    async deleteOne(gameStatsID) {
        const gameStats = await gameStatsRepositories.deleteOne(gameStatsID);
        return gameStats;
    },

}