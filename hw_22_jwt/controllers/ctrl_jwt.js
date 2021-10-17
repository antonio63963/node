const jws = require('jws');
const { getPrivKey } = require('./ctrl_getKeys');

const createAccessToken = async (payload) => {
  const privKey = await getPrivKey();
  const token = jws.sign({
    header: {alg: 'RS256'},
    payload,
    secret: privKey,
  })
  return token;
};

module.exports = {
  createAccessToken,
}