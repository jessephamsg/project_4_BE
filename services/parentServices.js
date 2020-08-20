const parentRepositories = require('../repositories/parentRepositories');

module.exports = {
    async getAllParents() {
        const allParents = await parentRepositories.getAllParents();
        return allParents;
    },
    async getParentByID(parentID) {
        const parent = await parentRepositories.getParentByID(parentID);
        return parent;
    },
    async createOneParent(newParent) {
        const parent = await parentRepositories.createOneParent(newParent);
        return parent;
    },
    async updateOneParent(parentID, parentData) { //used by the email and the password controller
        const parent = await parentRepositories.updateOneParent(parentID, parentData);
        return parent;
    },
    async addKidtoParent(parentID, kidData) {
        const parent = await parentRepositories.addKidtoParent(parentID, kidData);
        return parent;
    },
    async getParentByUsername(username) {
        const parent = await parentRepositories.getParentByUsername(username)
        return parent;
    }
}