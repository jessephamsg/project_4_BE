const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GameStatsSchema = new Schema({
  gameID: {
    type: String,
    required: true
  },
  level: {
    type: Number,
  },
  startTime: [{
    type: Date,
  }],
  endTime: [{
    type: Date,
  }],
  score: {
    type: mongoose.Decimal128,
  },
  attemptsBeforeSuccess: {
    type: Number
  },
  numberOfPauses: {
    type: Number
  },
});


const GameStats = mongoose.model('gamestats', GameStatsSchema)
module.exports = GameStats;