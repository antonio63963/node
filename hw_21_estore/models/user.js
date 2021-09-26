const path = require('path');
const mongoose = require('mongoose');
const {
  Schema
} = mongoose;


const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    maxLength: 32,
    required: true,
  },
  role: {
    type: Schema.Types.String,
    maxLength: 32,
    required: true,
  },
  ip: [{
    type: Schema.Types.String,
  }]
}, 
{
  timestamps: true
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;