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
    kidIsEmailNotif: { //isEmailNotified
      type: Boolean,
    },
    kidBDay: { //DOB
      type: Date,
      required: true
    },
    kidAge: { 
      type: Number,
      required: true
    },
    gameStat: [{
      _id: false,
      gameID: { type: String, required: true },
      gameName: { type: String, required: true },
      //gameDetails 
      gameLevel: { type: Object },
      timesPlayed: { type: Number, required: true }, //playFreq
      totalMinsPlayed: { type: Number, required: true }, //playDuration
      highestScore: { type: Number, required: true }, 
      //attemptsBeforeSuccess (number) 
      //numberOfPauses (number)
      //gamePauseTime (array)
    }],
    gameHistory: [{ //onlyID is required
      _id: false,
      gameID: { type: String, required: true },
      gameName: { type: String, required: true }, 
      gameLevel: { type: Object },
      timeStartPlay: { type: Date, required: true }, //gameStartTime <-- this should be under Stats
      timeStopPlay: { type: Date }, //gameEndTime <-- this should be under Stats
      currentScore: { type: Number }, // <-- this should be under Stats
    }]
  },
  {
    timestamps: true
  }
);

const Kids = mongoose.model('kids', KidsSchema)
module.exports = Kids;