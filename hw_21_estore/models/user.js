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
    index: true
  },
  email: {
    type: Schema.Types.String,
    maxLength: 32,
    required: true,
  },
  isAdmin: {
    type: Schema.Types.Boolean,
    default: false,
  },
  password: {
    type: Schema.Types.String,
    minLength: 3
  }
}, 
{
  timestamps: true
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;