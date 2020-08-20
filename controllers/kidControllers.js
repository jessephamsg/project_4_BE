const kidServices = require('../services/kidServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    async getKidByID(req, res) {
        const kidID = req.params.idx;
        const result = await kidServices.getKidByID(kidID);
        try {
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
        const kidID = req.params.idx;
        try {
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
        const kidID = req.params.idx;
        const gameID = req.params.gidx;
        try {
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
        const kidID = req.params.idx;
        const gameID = req.params.gidx;
        try {
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
}