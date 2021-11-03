const express = require('express');
const  router = express.Router();
const multer = require('multer');
const upload = multer();
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');
const { verifyAccessToken, decodeAccessToken, checkRefreshToken } = require('../controllers/ctrl_jwt');

/* GET home page. */
router.get('/', validateAccessToken, (req, res) => {
  // const { accessToken, refreshToken } = req.cookies;
  // const decodeToken = decodeAccessToken(accessToken);
  // const parsePayload = JSON.parse(decodeToken.payload);
  // res.render('index', { auth: { name: parsePayload.name, uid: parsePayload.uid }})
  if(req.params) {
    console.log("START PAGE AUTH: ", req.params);
    const { name, uid } = req.params;
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
