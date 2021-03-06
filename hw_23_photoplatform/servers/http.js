const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const engine = require('ejs-locals');
const indexRouter = require('../routes/index');
const authRouter = require('../routes/auth');
const albumLinkRouter = require('../routes/albumLink');
const userPanelRouter = require('../routes/userPanel');
const orderRouter = require('../routes/order');
const { url } = require('../config').db;

const app = express();

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/userPanel', userPanelRouter);
app.use('/albumLink', albumLinkRouter);
app.use('/order', orderRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
