const kidRepositories = require('../repositories/kidRepositories');

module.exports = {
    async getKidByID(kidID) {
        const kid = await kidRepositories.getKidByID(kidID);
        return kid;
    },
    async createOneKid(newKid) {
        const kid = await kidRepositories.createOneKid(newKid);
        return kid;
    },
    async updateOneKid(kidID, kidData) {
        const kid = await kidRepositories.updateOneKid(kidID, kidData);
        return kid;
    },
    async kidRecGameAtStart(kidID, gameStartData) {
        const kid = await kidRepositories.kidRecGameAtStart(kidID, gameStartData);
        return kid;
    },
    async kidRecGameAtStop(kidID, gameStopData) {
        const kid = await kidRepositories.kidRecGameAtStop(kidID, gameStopData);
        return kid;
    },
}