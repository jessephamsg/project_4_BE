const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KidsSchema = new Schema(
  {
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
    isKidEmailNotified: {
      type: Boolean,
    },
    kidBDay: {
      type: Date,
      required: true
    },
    kidAge: {
      type: Number,
      required: true
    },
    gameStatSummary: [{
      _id: false,
      gameID: { type: String, required: true },
      gameName: { type: String, required: true },
      gameDetail: [{
        gameLevel: { type: Number, required: true },
        playFrequency: { type: Number, required: true },
        playDuration: { type: Number, required: true },
        highestScore: { type: Number, required: true },
        avgAttemptsBeforeSuccess: { type: Number },
        avgNumberOfPauses: { type: Number },
        avgGamePauseTime: { type: Number },
      }],
    }],
    gamePlayHistory: [{
      _id: false,
      gameID: { type: String, required: true },
      gameName: { type: String, required: true },
      gameLevel: { type: Object },
      timeStartPlay: { type: Date, required: true },
      timeStopPlay: { type: Date },
      currentScore: { type: Number },
      attemptsBeforeSuccess: { type: Number },
      numberOfPauses: { type: Number },
      gamePauseTime: { array: Number },
    }]
  },
  {
    timestamps: true
  }
);

const Kids = mongoose.model('kids', KidsSchema)
module.exports = Kids;