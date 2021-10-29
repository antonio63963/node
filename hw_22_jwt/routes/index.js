var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const { successReg: successRegComponent, loginForm: loginComponent, regForm: regComponent } = require('../components')
const { createAccessToken, verifyAccessToken, decodeAccessToken, createRefreshToken, createTokenDoc, updateToken, removeTokenDok, checkRefreshToken } = require('../controllers/ctrl_jwt');
const {  createUser, loginUser, } = require('../controllers/cont_user');


/* GET home page. */
router.all('/*', async (req, res, next) => {
  const { accessToken, refreshToken } = req.body;
  const isValid = accessToken ? await verifyAccessToken(accessToken) : null;
  if(isValid) {
    const decodeToken = decodeAccessToken(accessToken);
    const parsePayload = JSON.parse(decodeToken.payload);
    const userExp = parsePayload.exp;
    const now = new Date().valueOf();
    const diff = now - userExp;
    // console.log("check DIFF token: ", diff, "eserExp: ", userExp, "now: ", now);
    if(diff > 3000) {
      const checkedToken = checkRefreshToken(refreshToken);
      console.log("TokenDOC: ", checkedToken);
      checkedToken ? 
        req.body.auth = decodeToken : 
        req.body.auth = null;
    }
    console.log("DECODE TOKEN: ", decodeToken);
    decodeToken.payload = parsePayload;
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
  const { auth } = req.body;
  console.log('Login route: ', auth);
  if(auth) res.send({status: 'ok', payload: {component: successRegComponent}})
  res.send({status: 'ok', payload: {component: loginComponent}});
});
router.get('/reg', async (req, res, next) => {
  console.log('This is the reg router!!!');
  res.send({status: 'ok', payload: {component: regComponent}});
});
router.post('/logout', async (req, res, next) => {
  console.log("LOGOUT: ", req.body);
  const { refreshToken } = req.body;
  removeTokenDok(refreshToken);
  res.send({status: 'not authorized'})
});

router.post('/auth', async (req, res) => {
  const auth = req.body.auth
  console.log('/AUTH');
  auth ? res.send({component: successRegComponent}) : res.send('index')
});
router.post('/loginData', upload.none(), async (req, res) => {
  console.log('LOG DATA: ', req.body);
  const { email, password, auth } = req.body;
  if(!auth) {
    const resultReg = await loginUser(email, password);
    const uid = resultReg.userID;
    console.log("LOG RES:", resultReg);
    const accessToken = await createAccessToken({uid});
    const refreshToken = createRefreshToken();
  
    const token_id = await createTokenDoc(uid, refreshToken);
    (accessToken && refreshToken) ?
      res.send({status: 'ok', payload: {uid, component: successRegComponent, tokens: {accessToken, refreshToken}}}) :
      res.send({status: false});
  } else {
    res.send({status: 'ok', payload: {uid: auth.payload.uid, component: successRegComponent}})
  }
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
let count = 0;
router.post('/updateToken', async (req, res) => {
  const { refreshToken } = req.body;
  const accessToken = await req.body.auth;
  console.log("UpdateToken: ", accessToken);
  const payload = await updateToken(accessToken, refreshToken);
 
  count++
  console.log('update: ', count);
  res.send({status: 'ok', payload: payload });
});
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVtttVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVgKVVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;


module.exports = router;
