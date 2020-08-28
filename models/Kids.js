const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KidsSchema = new Schema(
  {
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
    isPlaying : {
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
    gamesPlayed: [{
      _id: false,
      gameID: { type: String, required: true },
      gameHistoryID: { array: String }
    }]
  },
  {
    timestamps: true
  }
);

const Kids = mongoose.model('kids', KidsSchema)
module.exports = Kids;