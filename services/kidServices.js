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

    async addGameStats(kidName, parentID, gameStatsObj) {
        const kidObjectArr = await kidRepositories.getByFilter({parentID, name: kidName});
        const kidID = kidObjectArr[0]._id;
        const kid = await kidRepositories.addGameStats(kidID, gameStatsObj);
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