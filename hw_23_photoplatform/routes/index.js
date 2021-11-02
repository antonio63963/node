const express = require('express');
const  router = express.Router();
const multer = require('multer');
const upload = multer();
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess')

/* GET home page. */
router.get('/', validateAccessToken, (req, res) => {
  // console.log('HEADER: ', JSON.stringify(req.headers));
  if(req.body.auth) {
    const { auth } = req.body;
    res.render('index', { auth: {name: auth.name, uid: auth.uid}})
  }
  console.log('HEADER: ', req.cookies);
  res.render('index', {auth: false});
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/signUp', (req, res) => {
  res.render('signUp');
});

module.exports = router;
