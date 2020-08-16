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
}