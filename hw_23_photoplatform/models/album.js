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
  
  description: {
    type: Schema.Types.String,
  },
  tags: [{
    type: Schema.Types.String,
    minLength: 1, 
    maxLength: 255
  }],
  
  photos: [{
    id: {
      type: Schema.Types.ObjectId
    },
    link: {
      type: Schema.Types.String,
      required: true,
      minLength: 22
    }
  }],

   isApprove: {
    type: Schema.Types.Boolean,
    required: true,
  },
}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;