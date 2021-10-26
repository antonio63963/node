var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const userModel = require('../models/user');
const { createAccessToken, verifyAccessToken, decodeAccessToken, createRefreshToken, createTokenDoc } = require('../controllers/ctrl_jwt');
const {  createUser, loginUser, } = require('../controllers/cont_user');


/* GET home page. */
router.all('/*', async (req, res, next) => {
  const { token } = req.body;
  const isValid = token ? verifyAccessToken(token) : null;
  if(isValid) {
    const decodeToken = decodeAccessToken(token);
    console.log("DECODE TOKEN: ", decodeToken);
    req.body.auth = decodeToken;
  }else{
    req.body.auth = null;
  }
  next();
})
router.get('/', async (req, res, next) => {
  console.log('Start page: ' ,req.body);
  res.render('index', { title: 'Express' });
});
router.get('/login', async (req, res, next) => {
  res.render('login', {title: 'Login'});
});
router.get('/reg', async (req, res, next) => {
  res.render('reg', {title: 'Registration'});
});
router.post('/auth', async (req, res) => {
  const auth = req.body.auth
  // console.log('ROUTE AUTH: ', auth);
  // console.log("AUTH: ");
  auth ? res.send('index') : res.send('login')
})
router.post('/loginData', upload.none(), async (req, res) => {
  console.log('LOG DATA: ', req.body);
  const uid = '25';
  const token = await createAccessToken({id: uid});
  console.log('TOKEN: ', token);
  res.send({status: 'ok', payload: {token}})
})
router.post('/regData', upload.none(), async (req, res) => {
  console.log('REG DATA: ', req.body);
  const uid = await createUser(req.body);
  console.log("UID: ", uid);
  const accessToken = await createAccessToken({uid});
  const refreshToken = createRefreshToken();
  const token_id = await createTokenDoc(uid, refreshToken);
  console.log('new ref token: ', token_id);
  (accessToken && refreshToken) ?
    res.send({status: 'ok', payload: {accessToken, refreshToken}}) :
    res.send({status: false});
})
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVtttVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVgKVVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;


module.exports = router;
