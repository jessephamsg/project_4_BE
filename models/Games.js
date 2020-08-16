const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
    GamesName: {
        type: String,
        required: true
    },
    GamesIcon: {
        type: String,
        required: true
    },
    GamesCategory: {
        type: String,
        required: true
    },
    GamesLevel: [{
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

const Games = mongoose.model('games', GamesSchema)
module.exports = Games;