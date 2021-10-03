const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const generalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  group_product_id: {
    type: Schema.Types.ObjectId
  },
  product_id: {
    type: Schema.Types.ObjectId
  },
  text: {
    type: Schema.Types.String,
  },
  premoderation: {
    type: Schema.Types.Boolean,
  },
  isUpproove: {
    type: Schema.Types.Boolean,
  }
  
}, {timestamps: true});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;
