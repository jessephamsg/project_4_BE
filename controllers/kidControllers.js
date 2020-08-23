const kidServices = require('../services/kidServices');
const gameHistoryServices = require('../services/gameHistoryServices');
const gameStatisticServices = require('../services/gameStatisticServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    async getKidByID(req, res) {
        try {
            const kidID = req.params.idx;
            const result = await kidServices.getKidByID(kidID);
            responseFormatter.responseOK(req, res, result);
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async createOneKid(req, res) {
        try {
            const {
                parentID,
                kidName,
                kidIcon,
                kidMaxScreenTime,
                isKidEmailNotified,
                kidBDay,
                kidAge
            } = req.body;

            await kidServices.createOneKid({
                parentID,
                kidName,
                kidIcon,
                kidMaxScreenTime,
                isKidEmailNotified,
                kidBDay,
                kidAge
            })
            responseFormatter.responseOK(req, res, 'One Kid successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneKid(req, res) {
        try {
            const kidID = req.params.idx;
            const {
                kidName,
                kidIcon,
                kidMaxScreenTime,
                isKidEmailNotified,
                kidBDay,
                kidAge
            } = req.body;

            await kidServices.updateOneKid(kidID, {
                kidName,
                kidIcon,
                kidMaxScreenTime,
                isKidEmailNotified,
                kidBDay,
                kidAge
            })
            responseFormatter.responseOK(req, res, 'One Kid successfully updated!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async kidStartGame(req, res) {
        try {
            const kidID = req.params.idx;
            const gameID = req.params.gidx;
            const {
                gameID,
                gameName,
                gameLevel,
                timeStartPlay,
            } = req.body;

            await kidServices.kidStartGame(kidID, {
                gameID,
                gameName,
                gameLevel,
                timeStartPlay,
            })
            responseFormatter.responseOK(req, res, 'kidStartGame successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async kidStopGame(req, res) {
        try {
            const kidID = req.params.idx;
            const gameID = req.params.gidx;
            const {
                timeStopPlay,
                currentScore
            } = req.body;

            await kidServices.kidStopGame(kidID, {
                gameID,
                timeStopPlay,
                currentScore
            })
            responseFormatter.responseOK(req, res, 'kidStopGame successfully updated!');
        } catch (err) {
            console.log('err@kidStopGame@kidController: ', err);
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteOneKid(req, res) {
        try {
            const kidID = req.params.idx;
            await kidServices.deleteOneKid(kidID)
            responseFormatter.responseOK(req, res, 'deleteOneKid is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}