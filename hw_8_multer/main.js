
const express = require('express');
const path = require('path');
const multer = require('multer');

const { promises: Fs} = require('fs');

const upload = multer({dest: path.join(__dirname, 'public/upload')});
const server = express();
// server.use(express.json());
server.use(express.static(path.join(__dirname, 'public/js')));
server.use(express.static(path.join(__dirname, 'public/style')));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('/form', (req, res) => {
  res.render('mainPage');
})

// порядок инпутов в разметке имеет значение иначе в req не попадут!!!


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/upload')
//   },
//   filename: function (req, file, cb) {
//     console.log('FILE NAME repeat: ',req.body);
//     console.log('FILE repeat: ', req.file);
//     cb(null, req.body.filename);
//   }
// })
// const upload = multer({ storage: storage })

server.post('/form/req', upload.single('fileSend'), (req, res) => {
  console.log(req.body);
  const newName = req.body.fileName;
  const dir = './public/upload';
  const name = req.file.filename;
  Fs.rename(`${dir}/${name}`, `${dir}/${newName}`);
  console.log('req.file: ' ,req.file);
  res.json({status: 'ok'});
})

server.listen(8000, () => console.log('server start port 8000'));

