var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const { createAccessToken, verifyAccessToken, decodeAccessToken } = require('../controllers/ctrl_jwt')

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
  res.render('login', { title: 'Express' });
});
router.post('/auth', async (req, res) => {
  const auth = req.body.auth
  // console.log('ROUTE AUTH: ', auth);
  // console.log("AUTH: ");
  auth ? res.send('index') : res.send('login')
})
router.post('/login', upload.none(), async (req, res) => {
  console.log(req.body);
  const uid = '25';
  const token = await createAccessToken({id: uid});
  console.log('TOKEN: ', token);
  res.send({status: 'ok', payload: {token}})
})
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVtttVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;
// const token = `eyJhbGciOiJSUzI1NiJ9.eyJpZCI6IjI1In0.iYK-pHRQRVgKVVW400Z55XIEpm4s0rmiPEqSgxbcpohfoall3ZFznazFJck-fHIhozkbP7IwLivb6aiy7yD-7nrvVfIDNE89HTgobrGK7HA_Zolu-5mRJA0DUVexKp-FdsAUDAY-k51XEHwDuGZ-8QiNclcPnP-9mSGaf_T5LKk`;


module.exports = router;
