const moment = require('moment');
const birth = moment([1978, 2, 25]);
const current = moment();
const millisecDiff = current.diff(birth);
const age = moment.duration(millisecDiff)._data;
console.log(age);

// 2 variant to string
// let res = ``;
// for(key in age) {
//   const string = `${key}: ${age[key]}, `;
//   res += string;
// }
// console.log(res);
