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
                GameName,
                GameCategory,
                GameDesc,
                GameDeveloper,
                GameStatus,
                GameAvgRating,
                parentID,
                reviewRating,
                reviewDesc,
            } = req.body;

            await gameServices.createOneGame({
                GameName,
                GameCategory,
                GameDesc,
                GameDeveloper,
                GameStatus,
                GameAvgRating,
                GamesReview: {
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
                GameName,
                GameCategory,
                GameDesc,
                GameDeveloper,
                GameStatus,
                GameAvgRating,
                parentID,
                reviewRating,
                reviewDesc,
            } = req.body;

            await gameServices.updateOneGame(gameID, {
                GameName,
                GameCategory,
                GameDesc,
                GameDeveloper,
                GameStatus,
                GameAvgRating,
                GamesReview: {
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