const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const KidsSchema = new Schema({
  parentID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  maxScreenTime: {
    type: Number
  },
  isPlaying: {
    type: Boolean,
  },
  bDay: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gamesStats: [{
    _id: false,
    gameID: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    pauseTime: {
      type: String,
      required: true
    },
    totalScore: {
      type: Number,
      required: true,
    },
    gameStatsIDs: [{
      type: String
    }]
  }]
});


const Kids = mongoose.model('kids', KidsSchema)
module.exports = Kids;