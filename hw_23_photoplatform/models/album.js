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
  eventDate: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  tags: [{
    type: Schema.Types.String,
    maxLength: 255
  }],

  photos: [{
    link: {
    type: Schema.Types.String,
    required: true,
    minLength: 22
    },
    isApprove: {
      type: Schema.Types.Boolean,
      default: false
    },
    price: {
      type: Schema.Types.Number,
      default: 0
    }
  }],
  currency: {
    type: Schema.Types.String,
    enum: ['USD', 'UAH', 'EU'],
    default: 'USD',
  },
  isApprove: {
    type: Schema.Types.Boolean,
    default: false,
    required: true,
  },
}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;