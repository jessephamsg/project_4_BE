const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
    },
    kidsID: [{
      kidID: { type: String, required: true },
      kidName: { type: String, required: true },
    }]
  },
  {
    timestamps: true
  }
);

const Parents = mongoose.model('Parents', ParentsSchema)
module.exports = Parents;