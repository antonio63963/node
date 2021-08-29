const httpServerRunner = require('./httpServer');
const dbRunner = require('./db');

function run() {
  httpServerRunner();
  dbRunner()
};

module.exports = run;