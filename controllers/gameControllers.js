const gameServices = require('../services/gameServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    async getGameByID(req, res) {
        try {
            const gameID = req.params.idx;
            const result = await gameServices.getGameByID(gameID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOneGame(req, res) {
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

            await gameServices.createOneGame({
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
    async updateOneGame(req, res) {
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

            await gameServices.updateOneGame(gameID, {
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
    async deleteOneGame(req, res) {
        try {
            const gameID = req.params.idx;
            await gameServices.deleteOneGame(gameID)
            responseFormatter.responseOK(req, res, 'deleteOneGame is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}