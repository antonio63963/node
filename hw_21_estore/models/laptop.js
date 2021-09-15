const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  model: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    unique: true
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'group'
  },
  isActive: {
    type: Schema.Types.Boolean,
    default: true,
  },
  isSale: {
    type: Schema.Types.Boolean,
    default: false,
    index: true
  },
  img: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  properties: {
    type: Schema.Types.Map,
    of: new Schema({
      brand: {
        type: Schema.Types.ObjectId,
        ref: 'brand',
      },
      diagonal: {
        type: Schema.Types.String,
        maxLength: 2,
        required: true,
      },
      processor: {
        type: Schema.Types.String,
        required: true,
      }
    })
  }
  
}, {timestamps: true});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;
