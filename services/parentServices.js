const parentRepositories = require('../repositories/parentRepositories');

module.exports = {
    async getAll() {
        const allParents = await parentRepositories.getAll();
        return allParents;
    },
    async getByID(parentID) {
        const parent = await parentRepositories.getByID(parentID);
        return parent;
    },
    async getByName(username) {
        const parent = await parentRepositories.getByName(username)
        return parent;
    },
    async createOne(newParent) {
        const parent = await parentRepositories.createOne(newParent);
        return parent;
    },
    async updateOne(parentID, parentData) { //used by the email and the password controller
        const parent = await parentRepositories.updateOne(parentID, parentData);
        return parent;
    },
    async deleteOne(parentID) {
        const parent = await parentRepositories.deleteOne(parentID);
        return parent;
    },
    async addKid(parentID, kidData) {
        const parent = await parentRepositories.addKid(parentID, kidData);
        return parent;
    },
    async deleteKid(parentID, kidID) {
        const parent = await parentRepositories.deleteKid(parentID, kidID);
        return parent;
    },
}