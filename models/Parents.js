const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentsSchema = new Schema(
  {
    parentName: {
      type: String,
      required: true
    },
    parentEmail: {
      type: String,
      required: true
    },
    parentPassword: {
      type: String,
    },
    kidsList: [{
      _id: false,
      kidID: { type: String, required: true },
      kidName: { type: String, required: true },
    }],
  },
  {
    timestamps: true //delete this
  }
);

const Parents = mongoose.model('parents', ParentsSchema)
module.exports = Parents;