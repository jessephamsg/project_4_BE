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
        // console.log('kidData@parentService: ', kidData);
        const parent = await parentRepositories.addOneKidtoParent(parentID, kidData);
        return parent;
    },
}