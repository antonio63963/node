const path = require('path');
const { promises: FS } = require('fs');

let privKey = null;

const getPrivKey = async () => {
  if(!privKey) {
    const keyPath = path.resolve('keys/priv.key');
    privKey =  await FS.readFile(keyPath, 'utf8');
    return privKey;
  }
};

module.exports = {
  getPrivKey,
}