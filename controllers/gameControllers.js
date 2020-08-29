const gameServices = require('../services/gameServices');
const responseFormatter = require('../services/shared/responseFormatter');


module.exports = {
    async getByID(req, res) {
        try {
            const gameID = req.params.idx;
            const result = await gameServices.getByID(gameID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async getByName (req, res) {
        try {
            const gameName = req.params.gameName;
            const result = await gameServices.getByName(gameName);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async createOne(req, res) {
        try {
            const {
                name,
                category,
                desc,
                developer,
                status,
                avgRating,
                parentID,
                reviewRating,
                reviewDesc,
            } = req.body;

            await gameServices.createOne({
                name,
                category,
                desc,
                developer,
                status,
                avgRating,
                reviews: {
                    parentID,
                    reviewRating,
                    reviewDesc,
                },
            })
            responseFormatter.responseOK(req, res, 'One Game successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async updateOne(req, res) {
        try {
            const gameID = req.params.idx;
            const {
                name,
                category,
                desc,
                developer,
                status,
                avgRating,
                parentID,
                reviewRating,
                reviewDesc,
            } = req.body;

            await gameServices.updateOne(gameID, {
                name,
                category,
                desc,
                developer,
                status,
                avgRating,
                reviews: {
                    parentID,
                    reviewRating,
                    reviewDesc,
                },
            })
            responseFormatter.responseOK(req, res, 'One Game successfully updated!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async deleteOne(req, res) {
        try {
            const gameID = req.params.idx;
            await gameServices.deleteOne(gameID)
            responseFormatter.responseOK(req, res, 'deleteOne is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }

}