const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require("crypto");


const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    maxLength: 255,
    required: true,
    index: true
  },
  isAdmin: {
    type: Schema.Types.Boolean,
    default: false,
  },
  auth: {
    login: {
      type: Schema.Types.String,
      minLength: 5,
      required: true,
      unique: true
    },
    pwdHash: {
      type: Schema.Types.String,
      required: true,
      minLength: 3
    }
  }
}, 
{
  timestamps: true
});

function hashingPwd(pwd) {
  const sha1sum = crypto.createHash("sha1").update(pwd).digest("hex");
  console.log("pwd's hash: ", sha1sum);
  return sha1sum;
}

generalSchema.virtual('auth.pwd')
.set(function(pwd) {
  const hash = hashingPwd(pwd);
  this.auth.pwdHash = hash;
});

generalSchema.methods.checkPwd = function(pwd) {
  const hash = hashingPwd(pwd);
  const check = hash === this.auth.pwdHash;
  return check;
}

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);
module.exports = model;