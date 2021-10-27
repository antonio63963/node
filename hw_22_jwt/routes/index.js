var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const { successReg: successRegComponent} = require('../components')
const { createAccessToken, verifyAccessToken, decodeAccessToken, createRefreshToken, createTokenDoc, updateToken, removeTokenDok } = require('../controllers/ctrl_jwt');
const {  createUser, loginUser, } = require('../controllers/cont_user');


/* GET home page. */
router.all('/*', async (req, res, next) => {
  const { accessToken } = req.body;
  const isValid = accessToken ? verifyAccessToken(accessToken) : null;
  if(isValid) {
    const decodeToken = decodeAccessToken(accessToken);
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
router.post('/', async (req, res, next) => {
  console.log("POST /");
  if(req.body.auth) {res.render('registred')}
  res.render('index', { title: 'Express' });
});
router.get('/login', async (req, res, next) => {
  res.render('login', {title: 'Login'});
});
router.get('/reg', async (req, res, next) => {
  res.render('reg', {title: 'Registration'});
});
router.post('/logout', async (req, res, next) => {
  console.log("LOGOUT: ", req.params);
  // removeTokenDok(req.body.payload.refreshToken)
  // res.render('index', {title: 'Express'});
});

router.post('/auth', async (req, res) => {
  const auth = req.body.auth
  console.log('/AUTH');
  auth ? res.send({component: successRegComponent}) : res.send('index')
});
router.post('/loginData', upload.none(), async (req, res) => {
  console.log('LOG DATA: ', req.body);
  const { email, password } = req.body;// contr
  const resultReg = await loginUser(email, password)
  console.log("LOG RES:", resultReg);
  // const token = await createAccessToken({id: uid});
  // console.log('TOKEN: ', token);
  // res.send({status: 'ok', payload: {token}})
})
router.post('/regData', upload.none(), async (req, res) => {
  const uid = await createUser(req.body);
  const accessToken = await createAccessToken({uid});
  const refreshToken = createRefreshToken();
  const token_id = await createTokenDoc(uid, refreshToken);
  (accessToken && refreshToken) ?
    res.send({status: 'ok', payload: {uid, component: successRegComponent, tokens: {accessToken, refreshToken}}}) :
    res.send({status: false});
});
router.post('/updateToken', async (req, res) => {
  const { refreshToken } = req.body;
  const accessToken = await req.body.auth;
  console.log("UpdateToken: ", accessToken);
  const payload = await updateToken(accessToken, refreshToken);
  res.send({status: 'ok', payload});
});
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVtttVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVgKVVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;


module.exports = router;
