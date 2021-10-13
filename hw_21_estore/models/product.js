const path = require('path');
const mongoose = require('mongoose');
const {
  Schema
} = mongoose;


const generalSchema = new Schema({
  model: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    unique: true
  },
  type: {
    type: Schema.Types.String,
    maxLength: 32,
  },
  price: {
    type: Schema.Types.Number,
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
  img: [{
    type: Schema.Types.String,
  }],
  description: {
    type: Schema.Types.String,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'brand',
  },
  features: {
    type: Schema.Types.String, // validation in middleweare validate_features
  }

}, {
  timestamps: true
});

generalSchema.index( { "$**": "text" } )

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;

