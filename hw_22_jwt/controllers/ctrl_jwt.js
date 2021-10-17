const jws = require('jws');
const { getPrivKey, getPublicKey } = require('./ctrl_getKeys');

const createAccessToken = async (payload) => {
  const privKey = await getPrivKey();
  const token = jws.sign({
    header: {alg: 'RS256'},
    payload,
    secret: privKey,
  })
  return token;
};

const verifyAccessToken = async (token) => {
  const pubKey = await getPublicKey();
  test(token, pubKey)
  const hz = jws.verify(token, 'RS256', pubKey);
  console.log('HZ###', hz);
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
  verifyAccessToken
}