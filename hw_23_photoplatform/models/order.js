const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
  photographer: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }, 
  albumID: {
    type: Schema.Types.ObjectId,
    ref: 'album'
  },
  photos: [{
    photoID: {
      type: Schema.Types.ObjectId,
      ref: 'album.photos',
      required: true
    },
    link: {
      type: Schema.Types.String,
    },
    amount: {
      type: Schema.Types.Number,
      min: 1,
    },
    price: {
      type: Schema.Types.Number,
      required: true
    },
    sum: {
      type: Schema.Types.Number,
      required: true
    }
  }],
  currency: {
    type: Schema.Types.String,
    enum: ['USD', 'UA', 'EU'],
    default: 'USD'
  },
  generalSum: {
   type: Schema.Types.Number,
   required: true
  },
  isExecuted: {
    type: Schema.Types.Boolean,
    default: false
  }
}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;