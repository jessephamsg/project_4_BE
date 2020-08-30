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

    async addGameHistory(kidID, gameHistoryData) {
        const kid = await kidRepositories.addGameHistory(kidID, gameHistoryData);
        return kid;
    },

    async deleteOne(kidID) {
        const kid = await kidRepositories.deleteOne(kidID);
        return kid;
    },

    async getAllByParentID(parentID) {
        const arrayKids = await kidRepositories.getAllByParentID(parentID)
        return arrayKids
    }

}