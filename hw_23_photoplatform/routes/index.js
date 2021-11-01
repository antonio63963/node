const express = require('express');
const  router = express.Router();
const multer = require('multer');
const upload = multer();
const { uploadArr } = require('../middlewares/upload')

/* GET home page. */
router.get('/', (req, res) => {
  // console.log('HEADER: ', JSON.stringify(req.headers));
  console.log('HEADER: ', req.cookies);
  res.render('index');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/signUp', (req, res) => {
  res.render('signUp');
});




module.exports = router;
