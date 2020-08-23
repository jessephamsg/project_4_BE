const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameHistorySchema = new Schema(
    {
        gameID: { type: String, required: true },
        gameLevel: { type: Object },
        timeStartPlay: { type: Date, required: true },
        timeStopPlay: { type: Date },
        currentScore: { type: Number },
        attemptsBeforeSuccess: { type: Number },
        numberOfPauses: { type: Number },
        gamePauseTime: { array: Number },
      },
  {
    timestamps: true
  }
);

const GameHistory = mongoose.model('gameHistory', GameHistorySchema)
module.exports = GameHistory;