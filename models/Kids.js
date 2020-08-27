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
      type: String,
      required: true
    },
    kidAge: {
      type: Number,
      required: true
    },
    games: [{
      _id: false,
      gameID: { type: String, required: true },
      gameName: { type: String, required: true },
      gameHistory: { array: String }
    }]
  },
  {
    timestamps: true
  }
);

const Kids = mongoose.model('kids', KidsSchema)
module.exports = Kids;