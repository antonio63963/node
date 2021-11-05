const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  albumID: {
    type: Schema.Types.ObjectId,
    ref: 'album'
  },
  link: {
    type: Schema.Types.String,
    required: true,
    minLength: 22
  },
 
}, 
{
  timestamps: true
});


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;