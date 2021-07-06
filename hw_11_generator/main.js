const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public', 'stylesheets')));
server.use(express.static(path.join(__dirname, 'public', 'javascripts')));

server.use('/', indexRouter);
server.use('/users', usersRouter);

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
     img: reqArr[ind] != 1 ? 
     `https://starwars-visualguide.com/assets/img/planets/${reqArr[ind]}.jpg` :
     `https://starwars-visualguide.com/assets/img/placeholder.jpg`
    }
 })
 console.log(resArr);
  res.json({resArr})
})

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
