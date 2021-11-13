const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
  photographer: {
    type: Schema.Types.ObjectId,
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
   amount: {
    type: Schema.Types.Number,
    default: 0
   },
  }],
  currency: {
    type: Schema.Types.String,
    enum: ['USD', 'UA', 'EU'],
    default: 'USD'
  },
  sum: {
   type: Schema.Types.Number,
   default: 0
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