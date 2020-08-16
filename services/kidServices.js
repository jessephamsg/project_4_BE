const kidRepositories = require('../repositories/kidRepositories');

module.exports = {
    
    async createOneKid(newKid) {
        const kid = await kidRepositories.createOneKid(newKid);
        return kid;
    },
}