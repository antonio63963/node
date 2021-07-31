#!/usr/bin/env node

const httpRunner = require('./httpServ');
const wsRunner = require('./ws');

function run() {
    const httpServer = httpRunner();
    wsRunner(httpServer);
}

module.exports = run;


