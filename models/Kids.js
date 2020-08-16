const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KidsSchema = new Schema({
  parentID: {
    type: String,
    required: true
  },
  kidName: {
    type: String,
    required: true
  },
  kidIcon: {
    type: String,
    required: true
  },
  kidMaxScreenTime: {
    type: Number
  },
  kidIsEmailNotif: {
    type: Boolean,
  },
  kidBDay: {
    type: Date,
    required: true
  },
  gameStat: [{
    gameID: { type: String, required: true },
    gameName: { type: String, required: true },
    timesPlayed: { type: Number, required: true },
    totalMinsPlayed: { type: Number, required: true },
    highestScore: { type: Number, required: true },
  }],
  gameHistory: [{
    gameID: { type: String, required: true },
    gameName: { type: String, required: true },
    timeStartPlay: { type: Date, required: true },
    timeStopPlay: { type: Date},
    currentScore: { type: Number},
  }],
  timestamps: true
});

const Kids = mongoose.model('kids', KidsSchema)
module.exports = Kids;