const express = require('express');
const  router = express.Router();
const multer = require('multer');
const upload = multer();
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');
const { verifyAccessToken, decodeAccessToken, checkRefreshToken } = require('../controllers/ctrl_jwt');

/* GET home page. */
router.get('/', validateAccessToken, (req, res) => {
  if(req.params.auth) {
    console.log("START PAGE AUTH: ", req.params);
    const { name, uid } = req.params.auth;
    return res.render('index', { auth: { name, uid }})
  } else {
    return res.render('index', {auth: false});
  };
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signUp', (req, res) => {
  res.render('signUp');
});

module.exports = router;
