const parentRepositories = require('../repositories/parentRepositories');
const bcrypt = require("bcrypt");

module.exports = {
    async checkPassword (passwordTocheck,parentId) {
        const user = await parentRepositories.getByID(parentId)
        console.log('authservice',user.password)
        try {
            const result = await bcrypt.compare(passwordTocheck,user.password)
            return result 
        } catch (err) {
            return done(null,false, {message:err.message})
        }
    }
}