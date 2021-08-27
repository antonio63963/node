
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
  author: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
  },
  title: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
  },
  dateCreate: {
    type: Schema.Types.Date,
    
  },
  article: {
    type: Schema.Types.String,
    required: true,
  }
});

const model = mongoose.model('Article', generalSchema);
module.exports = model;