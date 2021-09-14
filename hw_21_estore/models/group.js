const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    unique: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  }
  
}, {timestamps: true});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;
