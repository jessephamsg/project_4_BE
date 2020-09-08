const kidServices = require('../services/kidServices');
const parentServices = require('../services/parentServices');
const gameStatsServices = require('../services/gameStatsServices');
const responseFormatter = require('../services/shared/responseFormatter');


module.exports = {

    async getByID(req, res) {
        try {
            const kidID = req.params.idx;
            const result = await kidServices.getByID(kidID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async getOneByNameAndParentID (req, res) {
        try {
            const parentID = req.query.parent;
            const kidName = req.params.kidName;
            const result = await kidServices.getOneByNameAndParentID(parentID, kidName);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async createOne(req, res) {
        try {
            const isPlaying = false;
            const {
                parentID,
                name,
                icon,
                maxScreenTime,
                bDay,
                age
            } = req.body;
            const newKid = await kidServices.createOne({
                parentID,
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            })
            const kidID = newKid._id;
            await parentServices.addKid(parentID, kidID)
            responseFormatter.responseOK(req, res, 'One Kid successfully added (to both kids and parents)!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async updateOne(req, res) {
        try {
            const kidID = req.params.idx;
            const {
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            } = req.body;

            await kidServices.updateOne(kidID, {
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            })
            responseFormatter.responseOK(req, res, 'One Kid successfully updated!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async deleteOne(req, res) {
        try {
            const kidID = req.params.idx;
            const kidData = await kidServices.getByID(kidID);
            const parentID = kidData.parentID;
            await kidServices.deleteOne(kidID);
            await parentServices.deleteKid(parentID, kidID)
            responseFormatter.responseOK(req, res, 'deleteOne (from both kids and parents) is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async getAllChildByParentID(req, res) {
        try {
            const parentID = req.params.parentidx;
            const arrayKids = await kidServices.getAllByParentID(parentID);
            responseFormatter.responseOK(req, res, arrayKids)
        } catch (err) {
            responseFormatter.responseErr(req, res, err)
        }
    },

    async getChildStatsByNameAndParentID (req, res) {
        try {
            const parentID = req.query.parent;
            const kidName = req.params.kidName;
            const kidStatsArr = await gameStatsServices.getAllStatsByKid(parentID, kidName);
            responseFormatter.responseOK(req, res, kidStatsArr)
        } catch (err) {
            responseFormatter.responseErr(req, res, err)
        }
    }
}