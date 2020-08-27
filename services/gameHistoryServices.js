const gameHistoryRepositories = require('../repositories/gameHistoryRepositories');

module.exports = {
    async getByID(gameHistoryID) {
        const gameHistory = await gameHistoryRepositories.getByID(gameHistoryID);
        return gameHistory;
    },
    async createOne(newGameHistory) {
        const gameHistory = await gameHistoryRepositories.createOne(newGameHistory);
        return gameHistory;
    },
    async updateOne(gameHistoryID, gameHistoryData) {
        const gameHistory = await gameHistoryRepositories.updateOne(gameHistoryID, gameHistoryData);
        return gameHistory;
    },
    async deleteOne(gameHistoryID) {
        const gameHistory = await gameHistoryRepositories.deleteOne(gameHistoryID);
        return gameHistory;
    },
}