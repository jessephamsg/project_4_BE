const gameServices = require('../services/gameServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    async getGameByID(req, res) {
        const gameID = req.params.idx;
        const result = await gameServices.getGameByID(gameID);
        try {
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOneGame(req, res) {
        try {
            const {
                GameName,
                GameIcon,
                GameCategory,
                GameDesc,
                GameDeveloper,
                GameStatus,
                GameAvgRating,
                parentID,
                reviewRating,
                reviewDesc,
                levelNum,
                levelDifficulty,
                levelDesc,
                isLevelTimed,
                levelDurationInSecond,
                levelHighestPossibleScore,
                levelConfiguration
            } = req.body;

            await gameServices.createOneGame({
                GameName,
                GameIcon,
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
                GameSettings: {
                    levelNum,
                    levelDifficulty,
                    levelDesc,
                    isLevelTimed,
                    levelDurationInSecond,
                    levelHighestPossibleScore,
                    levelConfiguration,
                },
            })
            responseFormatter.responseOK(req, res, 'One Game successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneGame(req, res) {
        const gameID = req.params.idx;
        try {
            const {
                GameName,
                GameIcon,
                GameCategory,
                GameDesc,
                GameDeveloper,
                GameStatus,
                GameAvgRating,
                parentID,
                reviewRating,
                reviewDesc,
                levelNum,
                levelDifficulty,
                levelDesc,
                isLevelTimed,
                levelDurationInSecond,
                levelHighestPossibleScore,
                levelConfiguration
            } = req.body;

            await gameServices.updateOneGame(gameID, {
                GameName,
                GameIcon,
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
                GameSettings: {
                    levelNum,
                    levelDifficulty,
                    levelDesc,
                    isLevelTimed,
                    levelDurationInSecond,
                    levelHighestPossibleScore,
                    levelConfiguration,
                },
            })
            responseFormatter.responseOK(req, res, 'One Game successfully updated!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteOneGame(req, res) {
        const gameID = req.params.idx;
        try {
            await gameServices.deleteOneGame(gameID)
            responseFormatter.responseOK(req, res, 'deleteOneGame is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}