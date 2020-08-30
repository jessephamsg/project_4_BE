const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ParentsSchema = new Schema({
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
  kidsList: [{
    type: String,
  }],
});


const Parents = mongoose.model('parents', ParentsSchema)
module.exports = Parents;