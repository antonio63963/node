const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
require('./author');
require('./genre');

const generalSchema = new Schema({
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'author',
  }],
  title: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    unique: true
  },
  pic: {
    type: Schema.Types.String,
    
  },
  description: {
    type: Schema.Types.String,
    
  },
  ganres: [{
    type: Schema.Types.ObjectId,
    ref: 'genre',
  }]
}, {timestamps: true});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;

