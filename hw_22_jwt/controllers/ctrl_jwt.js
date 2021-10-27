const jws = require('jws');
const { getPrivKey, getPublicKey } = require('./ctrl_getKeys');
const moment = require('moment');
const uniqid = require('uniqid');
const TokenModel = require('../models/token');

const createTokenDoc = async(uid, refreshToken) => {
  const tokenModel = new TokenModel;
  tokenModel.uid = uid;
  tokenModel.refreshToken = refreshToken;
  const doc_id = await tokenModel.save();
  return doc_id;
};
const removeTokenDok = async(refreshToken) => {
  TokenModel.findOne({refreshToken: refreshToken}).remove().exec(console.log('doc refreshToken has removed'));
}

const createAccessToken = async (payload) => {
  const privKey = await getPrivKey();
  // if(moment(payload.exp) < moment()) {
  //   delete(payload.exp);
  // };
  // if(!payload.exp) {
  //   payload.exp = moment().add(5, 'm');
  // }
  const now = new Date().valueOf();
  console.log("NOw; ", now);
  if(now > payload.exp) {
    delete payload.exp;
  };
  if(!payload.exp) {
    payload.exp = now + 5000
  }
  const token = jws.sign({
    header: {alg: 'RS256'},
    payload,
    secret: privKey,
  })
  return token;
};

const createRefreshToken = () => {
  const uniq = uniqid();
  return uniq;
};

const verifyAccessToken = async (token) => {
  const pubKey = await getPublicKey();
  test(token, pubKey)
  const hz = jws.verify(token, 'RS256', pubKey);
  console.log('isVALID: ', hz);
};
const decodeAccessToken = async (token) => {
  const decodeToken = jws.decode(token, 'RS256');
  return decodeToken;
}

const updateToken = async (accessToken, refreshToken) => {
  if(!accessToken && !refreshToken) {
    console.log('Update tokens is impossible!!! udateToken() ');
    return false;
  }
  console.log('OLD REFRESH: ', refreshToken);
  const oldPayload = JSON.parse(accessToken.payload);
  console.log('OlD__PayLOAD: ', oldPayload);
  const uid = oldPayload.uid;
  const newAccessToken = await createAccessToken({ uid });
  const newRefreshToken = createRefreshToken();
  const doc = TokenModel.updateOne({refreshToken: refreshToken}, {refreshToken: newRefreshToken});
  return {
    uid, accessToken: newAccessToken, refreshToken: newRefreshToken
  }
}

function test(token, secret) {
  if(typeof token !== 'string') throw new Error;
  if(typeof secret !== 'string') {
    console.log('secret type is: ', typeof secret);
    throw new Error;
  }
}

module.exports = {
  createAccessToken,
  verifyAccessToken,
  decodeAccessToken,
  createRefreshToken,
  createTokenDoc,
  updateToken,
  removeTokenDok
}