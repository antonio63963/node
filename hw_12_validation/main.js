const createError = require('http-errors');
const express = require('express');
const path = require('path');
const  multer  = require('multer')
const  upload = multer({ dest: 'uploads/' })
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Ajv = require('ajv');
const ajv = new Ajv();

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
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/users', usersRouter);

server.post('/req', upload.none(), (req, res) => {
  const schema = {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "maxLength": 120
      },
      "firstName": {
        "type": "string",
        "minLength": 1
      },
      "lastName": {
        "type": "string",
        "minLength": 1
      },
      "email": {
        "type": "string",
        // "format": "email"
      },
      "gender": {
        "type": "string",
        "minLength": 1
      },
      "ipAddress": {
        "type": "string",
        // "format": "ipv4",
        // "format": "ipv6"
      }
    },
    "required": [
      "id",
      "firstName",
      "lastName",
      "email"
    ],
    "additionalProperties": false
  };
  // const data = {
  //   id: '1',
  //   firstName: 'nik',
  //   lastName: 'freek',
  //   email: 'freek@mail.com',
  //   gender: 'male',
  //   ipAddress: '192.168.5.1'
  // }
  // const schema = {
  //   type: "object",
  //   properties: {
  //     foo: {type: "integer"},
  //     bar: {type: "string"}
  //   },
  //   required: ["foo"],
  //   additionalProperties: false,
  // }
  
  // const data = {
  //   foo: 1,
  //   bar: "abc"
  // }
  console.log('REQ BODY: ', req.body);
console.log(schema);
  const validate = ajv.compile(schema)
  const valid = validate(req.body)
console.log(valid);  
  if (!valid) console.log(validate.errors)
  res.json(req.body)
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
