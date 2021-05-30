const axios = require('axios');
const fs = require('fs');
const key = '40fa52eeff611338b4f7778dd9b63934';
const id = 698740;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Odesa&appid=${key}`;
const url3 = `http://api.openweathermap.org/data/2.5/forecast?q=Odesa&&units=metric&appid=${key}`

fs.open('weatherList.txt', 'w', (err) => {
  if(err) throw err;
  console.log('file created');
})

const addToFile = (fileName, item) => {
  fs.appendFile(fileName, item, err => {
    if(err) throw err;
    console.log(`success added to ${fileName}`);
  })
}

const request = () => {
   axios.get(url3).then(resp => {

   const  nextDay = resp.data.list[8];
   const { main, dt_txt} = nextDay
   const res = `${dt_txt} : ${main.temp} ℃,  ` + '\n'
   addToFile('weatherList.txt', res)
  });
}

setInterval(() => request(), 1000)



