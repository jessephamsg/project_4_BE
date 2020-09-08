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
        let gameIndex = 0;
        let gameIDObj = null;
        for (let i = 0; i < kidObjectArr[0].gamesStats.length; i++) {
            if(kidObjectArr[0].gamesStats[i].gameID == gameID) {
                gameIndex = i;
                gameIDObj = kidObjectArr[0].gamesStats[i];
            }
        }
        const gameStatsID = gameIDObj.gameStatsIDs[level];
        const updatedGameStats = await gameStatsRepositories.updateOne(gameStatsID, gameStatsData);
        const updatedKidStats = await kidRepositories.updateKidScore(kidName, parentID, gameIndex, gameStatsData.score)
        return updatedGameStats;
    },

    async deleteOne(gameStatsID) {
        const gameStats = await gameStatsRepositories.deleteOne(gameStatsID);
        return gameStats;
    },

    async getAllStatsByKid (parentID, kidName) {
        const kidObjectArr = await kidRepositories.getByFilter({parentID, name: kidName});
        const kidGameStatsArr = kidObjectArr[0].gamesStats;
        let gameStatsIDs = [];
        for (const gameStatsObj of kidGameStatsArr) {
            gameStatsIDs.push(gameStatsObj.gameStatsIDs)
        }
        return gameStatsIDs
    }

}