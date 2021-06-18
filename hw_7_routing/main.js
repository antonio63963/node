const path = require('path');
const express = require('express');
const mainRouter = require('./routes/mainRoute.js');
const prodRouter = require('./routes/prodRoute.js');
const dataProd = require('./DATA');

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, '/public/js')));
server.use(express.static(path.join(__dirname, '/public/style'))); 
server.use(express.static(path.join(__dirname, '/public/assets'))); 

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


server.use('/prod', prodRouter);
server.use('/', mainRouter);
server.get('/prod/list', (req, res) => res.json(dataProd));

server.post('/userData', (req, res) => {
  console.log(req.body);
  res.render('generic', {content: req.body})
})


server.listen(3333)