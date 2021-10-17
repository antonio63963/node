var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const { createAccessToken, verifyAccessToken } = require('../controllers/ctrl_jwt')

/* GET home page. */
router.get('/', async (req, res, next) => {
  console.log('Start page: ' ,req.body);
  res.render('index', { title: 'Express' });
});
router.post('/auth', async (req, res) => {
  const { token } = req.body;
  const isValid = verifyAccessToken(token)
  console.log(req.body);
  if(isValid) {
    res.send({ status: 'ok', payload: {auth: true}})
  }else{res.send({ status: 'error', payload: {auth: false}})}
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
