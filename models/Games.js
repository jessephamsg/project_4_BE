const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        desc: {
            type: String
        },
        developer: {
            type: String
        },
        status: {
            type: String
        },
        avgRating: {
            type: Number
        },
        reviews: [{
            _id: false,
            parentID: { type: String },
            reviewRating: { type: Number },
            reviewDesc: { type: String }
        }]
    }
);

const Games = mongoose.model('games', GamesSchema)
module.exports = Games;