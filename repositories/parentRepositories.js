const Parents = require('../models/Parents');
const errUtils = require('./utils/error');


module.exports = {

    async getByFilter(filter) {
        try {
            const results = await Parents.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },

    async getAll() {
        try {
            const results = await this.getByFilter({});
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getAll', err));
        }
    },

    async getByID(ParentsID) {
        try {
            const result = await Parents.findById(ParentsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByID', err));
        }
    },

    async getByName(username) {
        try {
            const result = await Parents.findOne({
                name: username
            })
            if (!result) {
                console.log('error')
                return
            }
            return result
        } catch (err) {
            err = {
                message : 'user not found'
            }
            throw new Error(errUtils.buildDBErrMessage('getByName', err));
        }
    },

    async getByEmail(email) {
        try {
            const result = await Parents.findOne({
                email: email
            })
            if (!result) {
                return 
            }
            return result
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByEmail', err));
        }
    },

    async createOne(newParent) {
        const checkUsername = await this.getByName(newParent.name)
        const checkEmail = await this.getByEmail(newParent.email)
        try {
            if (checkUsername) {
                throw new Error ('Username already existed')
            } else if (checkEmail) {
                throw new Error ('email already existed')
            }
            const result = await Parents.create(newParent);
                console.log(result)
                return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOne', err));
        }
    },

    async updateOne(parentID, parentData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, parentData);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOne', err));
        }
    },

    async deleteOne(parentID) {
        try {
            const result = await Parents.findByIdAndRemove(parentID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOne', err));
        }
    },

    async addKid(parentID, kidData) {
        try {
            const result = await Parents.findByIdAndUpdate(parentID, {
                $push: {
                    kidsList: kidData
                }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('addKid', err));
        }
    },

    async deleteKid(parentID, kidID) {
        try {
            const result = await Parents.updateOne({
                _id: parentID
            }, {
                "$pull": {
                    "kidsList": {
                         $in : [kidID]
                    }
                }
            });
            console.log('parent repo del :',result.ok)
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteKid', err));
        }
    },

}