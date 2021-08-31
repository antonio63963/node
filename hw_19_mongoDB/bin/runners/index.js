const httpServerRunner = require('./httpServer');
const dbRunner = require('./db');

async function run() {
  await dbRunner();
  await httpServerRunner();
};

module.exports = run;