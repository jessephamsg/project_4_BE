const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ParentSchema = new Schema({
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
    }],
    timestamps: true
  });

const Parent = mongoose.model('Parent', ParentSchema)
module.exports = Parent;