const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    index: true
  },

  uid: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  images: [{
    type: Schema.Types.ObjectId,
  }],
  
  description: {
    type: Schema.Types.String,
  },
  tags: [{
    type: Schema.Types.String,
    minLength: 2, 
    maxLength: 255
  }]
  
}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;