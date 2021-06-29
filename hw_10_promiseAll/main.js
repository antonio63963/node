const express = require('express');
const path = require('path');
const axios = require('axios');
const mainRoute = require('./routes/mainRoute');


const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/', mainRoute);

server.post('/form/req', async (req, res) => {
  const reqArr = await req.body.inputId.split(',');
  console.log(reqArr);
  const promisesArr = reqArr.map( async (id) => {
    const {data} = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    return data;
  });
  console.log(promisesArr);
  const awaitArr = await Promise.all(promisesArr);

 console.log(awaitArr);
 resArr = awaitArr.map((planet, ind) => {
   return {
     name: planet.name,
     population: planet.population,
     diameter: planet.diameter,
     surfaceWater: planet.surface_water,
     img: `https://starwars-visualguide.com/assets/img/planets/${reqArr[ind]}.jpg`
    }
 })
 console.log(resArr);
  res.json({resArr})
})

server.listen(8000, () => console.log('server start'));