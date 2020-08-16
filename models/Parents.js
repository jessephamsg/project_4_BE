const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ParentsSchema = new Schema({
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
      required: true
    },
    kidsList: [{
        kidID: { type: String, required: true },
        kidName: { type: String, required: true },
    }],
    timestamps: true
  });

const Parents = mongoose.model('Parents', ParentsSchema)
module.exports = Parents;