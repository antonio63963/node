const path = require('path');
const express = require('express');
const mainRouter = require('./routes/mainRoute');


const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, '/public')));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('/', mainRouter);
server.get('/form', (req, res) => {
  res.render('form')
})


server.post('/userData', (req, res) => {
  console.log(req.body);
  res.send('ok')
})

server.listen(3333)