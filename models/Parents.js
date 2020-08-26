const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParentsSchema = new Schema(
  {
    username: {
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
    kidsList: [{
      _id: false,
      kidID: { type: String, required: true },
      kidIcon : { type: String, required: true },
      kidName : { type: String, required: true }
    }],
  },
  {
    timestamps: true
  }
);

const Parents = mongoose.model('parents', ParentsSchema)
module.exports = Parents;