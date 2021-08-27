const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/blog`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(url, options);
const db = mongoose.connection;

db.once('open', () => console.log('DB has run successfully'));
db.once('close', () => console.log('DB has failed'));
db.on('error', err => console.log('Error: ' + err));

