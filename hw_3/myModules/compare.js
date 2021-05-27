const moment = require('moment');

let dateBirth = [];  
const setAge = (month, day, year) => {
  dateBirth = [year, month - 1, day]
}
const getAge = () => {
  const age = dateBirth != undefined ? 
    moment(dateBirth).fromNow() : 
    "возраст не устновлен"

  return `You was born ${age}`
}

const superUsefulTimer = () => {
  setInterval(() => console.log('Прошли уще 10 секунд'), 10000)
}
superUsefulTimer()


module.exports = {
  setAge,
  getAge,

}
