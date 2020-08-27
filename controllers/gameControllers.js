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
    async createOne(req, res) {
        try {
            const {
                Name,
                Category,
                Desc,
                Developer,
                Status,
                AvgRating,
                parentID,
                reviewRating,
                reviewDesc,
            } = req.body;

            await gameServices.createOne({
                Name,
                Category,
                Desc,
                Developer,
                Status,
                AvgRating,
                Reviews: {
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
                Name,
                Category,
                Desc,
                Developer,
                Status,
                AvgRating,
                parentID,
                reviewRating,
                reviewDesc,
            } = req.body;

            await gameServices.updateOne(gameID, {
                Name,
                Category,
                Desc,
                Developer,
                Status,
                AvgRating,
                Review: {
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