const gameStatsServices = require('../services/gameStatsServices');
const kidServices = require('../services/kidServices');
const responseFormatter = require('../services/shared/responseFormatter');


module.exports = {

    async getByID(req, res) {
        try {
            const gameStatsID = req.params.idx;
            const result = await gameStatsServices.getByID(gameStatsID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

    async createOne(req, res) {
        const [gameOverallStats, gameStatsArr] = req.body;
        const parentID = req.query.parent;
        const kidName = req.params.kidName;
        const newGameStats = await gameStatsServices.createOne(kidName, parentID, gameStatsArr);
        gameOverallStats.gameStatsIDs = [...newGameStats]
        const updatedChildObject = await kidServices.addGameStats(kidName, parentID, gameOverallStats);
    },

    async updateOne(req, res) {
        const level = req.query.level;
        const parentID = req.query.parent;
        const gameID = req.body.gameID;
        const kidName = req.params.kidName;
        const {startTime, endTime, score, attemptsBeforeSuccess, numberOfPauses} = req.body;
        await gameStatsServices.updateOne(parentID, kidName, gameID, level, {startTime, endTime, score, attemptsBeforeSuccess, numberOfPauses})
    },

    async deleteOne(req, res) {
        try {
            const gameStatsID = req.params.idx;
            const gameStatsData = await gameStatsServices.getByID(gameStatsID);
            const parentID = gameStatsData.parentID;
            await gameStatsServices.deleteOne(gameStatsID);
            await parentServices.deleteGameHistory(parentID, gameStatsID)
            responseFormatter.responseOK(req, res, 'deleteOne (from both gameStatss and parents) is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },

}