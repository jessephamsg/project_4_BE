const parentRepositories = require('../repositories/parentRepositories');

module.exports = {
    async getAllParents() {
        const allParents = await parentRepositories.getAll();
        return allParents;
    },
    async getParentByID(parentID) {
        const parent = await parentRepositories.getByID(parentID);
        return parent;
    },
    async createOneParent(newParent) {
        const parent = await parentRepositories.createOne(newParent);
        return parent;
    },
    async getParentByUsername(username) {
        const parent = await parentRepositories.getByUsername(username)
        return parent;
    }
}