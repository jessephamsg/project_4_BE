const kidRepositories = require('../repositories/kidRepositories');

module.exports = {
    async getByID(kidID) {
        const kid = await kidRepositories.getByID(kidID);
        return kid;
    },
    async createOne(newKid) {
        const kid = await kidRepositories.createOne(newKid);
        return kid;
    },
    async updateOne(kidID, kidData) {
        const kid = await kidRepositories.updateOne(kidID, kidData);
        return kid;
    },
    async startGame(kidID, gameStartData) {
        const kid = await kidRepositories.startGame(kidID, gameStartData);
        return kid;
    },
    async stopGame(kidID, gameStopData) {
        const kid = await kidRepositories.stopGame(kidID, gameStopData);
        return kid;
    },
    async deleteOne(kidID) {
        const kid = await kidRepositories.deleteOne(kidID);
        return kid;
    },
}