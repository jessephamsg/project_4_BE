const kidRepositories = require('../repositories/kidRepositories');

module.exports = {
    async getKidByID(kidID) {
        const kid = await kidRepositories.getKidByID(kidID);
        return kid;
    },
    async createOneKid(newKid) {
        console.log('service', newKid)
        const kid = await kidRepositories.createOneKid(newKid);
        return kid;
    },
    async updateOneKid(kidID, kidData) {
        const kid = await kidRepositories.updateOneKid(kidID, kidData);
        return kid;
    },
    async kidStartGame(kidID, gameStartData) {
        const kid = await kidRepositories.kidStartGame(kidID, gameStartData);
        return kid;
    },
    async kidStopGame(kidID, gameStopData) {
        const kid = await kidRepositories.kidStopGame(kidID, gameStopData);
        return kid;
    },
    async deleteOneKid(kidID) {
        const kid = await kidRepositories.deleteOneKid(kidID);
        return kid;
    },
}