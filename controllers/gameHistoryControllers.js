const gameHistoryServices = require('../services/gameHistoryServices');
const kidServices = require('../services/kidServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    async getByID(req, res) {
        try {
            const gameHistoryID = req.params.idx;
            const result = await gameHistoryServices.getByID(gameHistoryID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOne(req, res) {
        try {
            const kidID = req.params.idx;
            const gameID = req.params.gidx;
            const timeStartPlay = Date.now();
            const {
                gameLevel
            } = req.body;
            const newGameHistory = await gameHistoryServices.createOne({
                gameID,
                gameLevel,
                timeStartPlay,
                timeStopPlay: null,
                currentScore: 0,
                attemptsBeforeSuccess: 0,
                numberOfPauses: 0,
                gamePauseTime: [],
            })
            const gameHistoryID = newGameHistory._id;
            console.log("gameID@createOne@gameHistoryController: ", gameID);
            await kidServices.addGameHistory(kidID, {
                gameID,
                gameHistoryID
            })

            responseFormatter.responseOK(req, res, 'One GameHistory successfully added (to both gameHistory and kids)!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOne(req, res) {
        try {
            const gameHistoryID = req.params.idx;
            const {
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            } = req.body;

            await gameHistoryServices.updateOne(gameHistoryID, {
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            })
            responseFormatter.responseOK(req, res, 'One GameHistory successfully updated!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteOne(req, res) {
        try {
            const gameHistoryID = req.params.idx;
            const gameHistoryData = await gameHistoryServices.getByID(gameHistoryID);
            const parentID = gameHistoryData.parentID;
            await gameHistoryServices.deleteOne(gameHistoryID);
            await parentServices.deleteGameHistory(parentID, gameHistoryID)
            responseFormatter.responseOK(req, res, 'deleteOne (from both gameHistorys and parents) is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
}