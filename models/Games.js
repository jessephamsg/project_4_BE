const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema(
    {
        GameName: {
            type: String,
            required: true
        },
        // GameIcon: { -> put to front end
        //     type: String,
        //     required: true
        // },
        GameCategory: {
            type: String,
            required: true
        },
        GameDesc: {
            type: String
        },
        GameDeveloper: {
            type: String
        },
        GameStatus: {
            type: String
        },
        GameAvgRating: {
            type: Number
        },
        GamesReview: [{
            parentID: { type: String },
            reviewRating: { type: Number },
            reviewDesc: { type: String }
        }],
        // GameSettings: [{ -> put to front end
        //     levelNum: { type: Number },
        //     levelDifficulty: { type: String },
        //     levelDesc: { type: String },
        //     isLevelTimed: { type: Boolean },
        //     levelDurationInSecond: { type: Number },
        //     levelHighestPossibleScore: { type: Number },
        //     levelConfiguration: { type: Object }
        // }],
        // GameAssets: [{ -> put to front end
        //     type: Object
        // }]
    }
);

const Games = mongoose.model('games', GamesSchema)
module.exports = Games;