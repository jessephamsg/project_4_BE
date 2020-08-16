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
    async updateOneParent(parentID, parentData) {
        const parent = await parentRepositories.updateOneParent(parentID, parentData);
        return parent;
    },
    async addOneKidtoParent(parentID, kidData) {
        const parent = await parentRepositories.addOneKidtoParent(parentID, kidData);
        return parent;
    },
    async updateOneKidofParent(parentID, kidData) {
        const parent = await parentRepositories.updateOneKidofParent(parentID, kidData);
        return parent;
    },
    async getParentByUsername(username) {
        const parent = await parentRepositories.getByUsername(username)
        return parent;
    }
}