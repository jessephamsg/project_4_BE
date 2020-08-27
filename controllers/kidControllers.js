const kidServices = require('../services/kidServices');
const parentServices = require('../services/parentServices');
// const gameHistoryServices = require('../services/gameHistoryServices');
// const gameStatisticServices = require('../services/gameStatisticServices');
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
            const isPlaying = false;
            const {
                parentID,
                name,
                icon,
                maxScreenTime,
                bDay,
                age
            } = req.body;
            const newKid = await kidServices.createOneKid({
                parentID,
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            })
            const kidID = newKid._id;
            await parentServices.addKid(parentID, {
                kidID,
            })

            responseFormatter.responseOK(req, res, 'One Kid successfully added (to both kids and parents)!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
    async updateOneKid(req, res) {
        try {
            const kidID = req.params.idx;
            const {
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
            } = req.body;

            await kidServices.updateOneKid(kidID, {
                name,
                icon,
                maxScreenTime,
                isPlaying,
                bDay,
                age
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
            responseFormatter.responseErr(req, res, err);
        }
    },
    async deleteOneKid(req, res) {
        try {
            const kidID = req.params.idx;
            const kidData = await kidServices.getKidByID(kidID);
            const parentID = kidData.parentID;
            await kidServices.deleteOneKid(kidID);
            await parentServices.deleteKid(parentID, kidID)
            responseFormatter.responseOK(req, res, 'deleteOneKid (from both kids and parents) is successful!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    }
}