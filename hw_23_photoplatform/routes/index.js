const express = require('express');
const  router = express.Router();
const multer = require('multer');
const upload = multer();
const { uploadArr } = require('../middlewares/upload')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/signUp', (req, res) => {
  res.render('signUp');
});




module.exports = router;
