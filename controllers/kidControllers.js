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
                kidIsEmailNotif,
                kidBDay,
                kidAge
            } = req.body;

            await kidServices.updateOneKid(kidID, {
                kidName,
                kidIcon,
                kidMaxScreenTime,
                kidIsEmailNotif,
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
    async kidAddStatFirstPlayAtStop(req, res) {
        const kidID = req.params.idx;
        try {
            const {
                gameID,
                gameName,
                gameLevel,
                timesPlayed,
                totalMinsPlayed,
                highestScore
            } = req.body;

            await kidServices.kidAddStatFirstPlayAtStop(kidID, {
                gameID,
                gameName,
                gameLevel,
                timesPlayed,
                totalMinsPlayed,
                highestScore
            })
            responseFormatter.responseOK(req, res, 'kidAddStatFirstPlayAtStop successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async kidUpdateStatAtStop(req, res) {
        const kidID = req.params.idx;
        const gameID = req.params.gidx;
        try {
            const {
                gameLevel,
                timesPlayed,
                totalMinsPlayed,
                highestScore
            } = req.body;

            await kidServices.kidUpdateStatAtStop(kidID, {
                gameID,
                gameLevel,
                timesPlayed,
                totalMinsPlayed,
                highestScore
            })
            responseFormatter.responseOK(req, res, 'kidUpdateStatAtStop successfully updated!');
        } catch (err) {
            console.log('err@kidUpdateStatAtStop@kidController: ', err);
            responseFormatter.responseErr(req, res, err);
        }
    }
}