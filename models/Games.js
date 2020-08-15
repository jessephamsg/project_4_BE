const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    GameName: {
        type: String,
        required: true
    },
    GameIcon: {
        type: String,
        required: true
    },
    GameCategory: {
        type: String,
        required: true
    },
    GameLevel: [{
        levelNum: { type: Num },
        levelDifficulty: { type: String },
        levelDesc: { type: String },
        levelIsTimed: { type: Boolean },
        levelDurationInSecond: { type: Number },
        levelHighestPossibleScore: { type: Number },
        levelConfiguration: { type: Object }
    }],
    timestamps: true
});

const Game = mongoose.model('Game', GameSchema)
module.exports = Game;