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
}

const createAccessToken = async (payload) => {
  const privKey = await getPrivKey();
  if(moment(payload.exp) < moment()) {
    delete(payload.exp);
  };
  if(!payload.exp) {
    payload.exp = moment().add(5, 'm');
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
  console.log('HZ###', hz);
};
const decodeAccessToken = async (token) => {
  const decodeToken = jws.decode(token, 'RS256');
  return decodeToken;
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
  createTokenDoc
}