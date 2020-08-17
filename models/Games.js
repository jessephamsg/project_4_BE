const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema(
    {
        GamesName: {
            type: String,
            required: true
        },
        GamesIcon: {
            type: String,
            required: true
        },
        //GameImg
        //GameDesc
        //Developer
        //GameStats: ratings, reviews, numberOfKidsAttempted
        GamesCategory: {
            type: String,
            required: true
        },
        GamesLevel: [{ //GameSettings 
            levelNum: { type: Num }, //level
            levelDifficulty: { type: String }, 
            levelDesc: { type: String },
            levelIsTimed: { type: Boolean }, //timed
            levelDurationInSecond: { type: Number }, //i think no need this
            levelHighestPossibleScore: { type: Number }, // i think no need this
            levelConfiguration: { type: Object } // i think no need this
        }],
        GamesLib: [{
            type: Object
        }]
    },
    {
        timestamps: true
    }
);

const Games = mongoose.model('games', GamesSchema)
module.exports = Games;