const os = require('os');
const data = os.cpus()[0];
const cpuModel = () => console.log('model: ' + data.model);
const cpuSpeed = () => console.log('speed: ' + data.speed);


module.exports = {
  cpuModel,
  cpuSpeed
}