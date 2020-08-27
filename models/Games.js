const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema(
    {
        GameName: {
            type: String,
            required: true
        },
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
            _id: false,
            parentID: { type: String },
            reviewRating: { type: Number },
            reviewDesc: { type: String }
        }]
    }
);

const Games = mongoose.model('games', GamesSchema)
module.exports = Games;