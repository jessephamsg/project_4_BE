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
    kids_id: [{
        kid_id: String
    }],
    timestamps: true
  });

const Parent = mongoose.model('Parent', ParentSchema)
module.exports = Parent;