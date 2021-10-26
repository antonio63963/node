const mongoose = require('mongoose');
const config = {
  url: `mongodb://localhost:27017/testJWT`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}
function run() {
  const { url, options } = config;
  mongoose.connect(url, options);
  const db = mongoose.connection;
  db.once('open', () => console.log('DB has run successfully'));
  db.once('close', () => console.log('DB has failed'));
  db.on('error', err => console.log('Error: ' + err));
};

module.exports = run;