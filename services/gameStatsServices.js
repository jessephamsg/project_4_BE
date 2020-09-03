const gameStatsRepositories = require('../repositories/gameStatsRepositories');
const kidRepositories = require('../repositories/kidRepositories');


module.exports = {

    async getByID(gameStatsID) {
        const gameStats = await gameStatsRepositories.getByID(gameStatsID);
        return gameStats;
    },

    async createOne(kidName, parentID, gameStatsArr) {
        const statsIDArr = [];
        for (const newGameStats of gameStatsArr) {
            const result = await gameStatsRepositories.createOne(newGameStats);
            statsIDArr.push(result._id);
        }
        return statsIDArr
    },

    async updateOne(parentID, kidName, gameID, level, gameStatsData) {
        const kidObjectArr = await kidRepositories.getByFilter({parentID, name: kidName});
        const kidID = kidObjectArr[0]._id;
        const gameIDObj = kidObjectArr[0].gamesStats.filter(gameObj => gameObj.gameID == gameID);
        const gameStatsID = gameIDObj[0].gameStatsIDs[level];
        const updatedGameStats = await gameStatsRepositories.updateOne(gameStatsID, gameStatsData);
        return updatedGameStats;
    },

    async deleteOne(gameStatsID) {
        const gameStats = await gameStatsRepositories.deleteOne(gameStatsID);
        return gameStats;
    },

}