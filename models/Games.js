const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        Desc: {
            type: String
        },
        Developer: {
            type: String
        },
        Status: {
            type: String
        },
        AvgRating: {
            type: Number
        },
        Reviews: [{
            _id: false,
            parentID: { type: String },
            reviewRating: { type: Number },
            reviewDesc: { type: String }
        }]
    }
);

const Games = mongoose.model('games', GamesSchema)
module.exports = Games;