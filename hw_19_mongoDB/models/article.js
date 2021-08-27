
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
  author: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    unique: true
  },
  title: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    unique: true
  },
  published: {
    type: Schema.Types.Date,
    
  },
  text: {
    type: Schema.Types.String,
    required: true,
  }
});

const model = mongoose.model('Article', generalSchema);
module.exports = model;