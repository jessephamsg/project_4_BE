const Kids = require('../models/Kids');
const errUtils = require('./utils/error');
const parentRepositories = require('./parentRepositories')

module.exports = {
    async getByFilter(filter) {
        try {
            const results = await Kids.find(filter);
            return results;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getByFilter', err));
        }
    },
    async getKidByID(KidsID) {
        try {
            const result = await Kids.findById(KidsID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('getKidByID', err));
        }
    },
    async createOneKid(newKid) {
        console.log('line22', newKid);
        try {
            const result = await Kids.create(newKid);
            console.log('line26', result)
            const parentID = newKid.parentID
            const kidData = {
                kidID : result._id,
                kidName : result.kidName,
                kidIcon : result.kidIcon
            }
            const addToParent = await parentRepositories.addKidtoParent(parentID,kidData)
            // need to append new kid id to parent kid list
            console.log(addToParent)
            return result;
            
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('createOneKid', err));
        }
    },
    async updateOneKid(kidID, kidData) {
        try {
            const result = await Kids.findByIdAndUpdate(kidID, {
                $set: kidData
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('updateOneKid', err));
        }
    },
    async kidStartGame(kidID, gameStartData) {
        try {
            const result = await Kids.findByIdAndUpdate(kidID, {
                $push: { gameHistory: gameStartData }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('kidStartGame', err));
        }
    },
    async kidStopGame(kidID, gameStopData) {
        try {
            const result = await Kids.findOneAndUpdate({
                "_id": kidID,
                "gameHistory.gameID": gameStopData.gameID
            }, {
                $set: {
                    "gameHistory.$.timeStopPlay": gameStopData.timeStopPlay,
                    "gameHistory.$.currentScore": gameStopData.currentScore
                }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('kidStopGame', err));
        }
    },
    async kidAddStatFirstPlayAtStop(kidID, gameStopData) {
        try {
            const result = await Kids.findByIdAndUpdate(kidID, {
                $push: { 
                    "gameStat.gameID" : gameStopData.gameID,
                    "gameStat.gameName" : gameStopData.gameName,
                    "gameStat.gameDetail.gameLevel" : gameStopData.gameLevel,
                    "gameStat.gameDetail.timesPlayed" : gameStopData.timesPlayed,
                    "gameStat.gameDetail.totalMinsPlayed" : gameStopData.totalMinsPlayed,
                    "gameStat.gameDetail.highestScore" : gameStopData.highestScore,
                }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('kidAddStatFirstPlayAtStop', err));
        }
    },
    async kidUpdateStatAtStop(kidID, gameStopData) {
        try {
            const result = await Kids.findOneAndUpdate({
                "_id": kidID,
                "gameStat.gameID": gameStopData.gameID
            }, {
                $set: {
                    "gameStat.$.gameLevel": gameStopData.gameLevel,
                    "gameStat.$.timesPlayed": gameStopData.timesPlayed,
                    "gameStat.$.totalMinsPlayed": gameStopData.totalMinsPlayed,
                    "gameStat.$.highestScore": gameStopData.highestScore
                }
            });
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('kidUpdateStatAtStop', err));
        }
    },
    async deleteOneKid(kidID) {
        try {
            const result = await Kids.findByIdAndRemove(kidID);
            return result;
        } catch (err) {
            throw new Error(errUtils.buildDBErrMessage('deleteOneKid', err));
        }
    },
}