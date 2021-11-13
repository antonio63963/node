const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
  photographer: {
    type: Schema.Types.ObjectId,
  }, 
  photos: [{
   photoID: {
    type: Schema.Types.String
   },
   amount: {
    type: Schema.Types.Number
   },
   price: {
     type: Schema.Types.Number
   },
  }],
  currency: {
    type: Schema.Types.String,
    enum: ['USD', 'UA', 'EU'],
    default: 'USD'
  },
  sum: {
   type: Schema.Types.Number
  },
  isExecuted: {
    type: Schema.Types.Boolean
  }
}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;