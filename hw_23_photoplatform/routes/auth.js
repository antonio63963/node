const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registration, checklogin } = require('../middlewares/jsonSchema/check_formUser');
const { createUser, loginUser, checkUserByEmail } = require('../controllers/cont_user');
const { createAccessToken, createRefreshToken, createTokenDoc } = require('../controllers/ctrl_jwt');
const userPanel = require('../components/userPanel');

// POST
router.post('/signUpData', upload.none(), registration, async (req, res) => {
  const reqData = req.body;
  console.log('REqData: ', reqData);
  const user = await checkUserByEmail(reqData);
  if(!user) {
    const uid = await createUser(reqData);
    const accessToken = await createAccessToken({uid});
    const refreshToken = createRefreshToken();
    const token_id = await createTokenDoc(uid, refreshToken);
    if(accessToken && refreshToken) {
      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.cookie('refreshToken', refreshToken, { httpOnly: true });
      res.send({status: 'ok', payload:{ uid, component: userPanel }})
    }
    // (accessToken && refreshToken) ?
    //   res.send({status: 'ok', payload: {uid, component: userPanel, tokens: {accessToken, refreshToken}}}) :
    //   res.send({status: false});
  } else {
    res.send({status: 'error', message: 'This user exist yet'})
  };
});
router.post('/loginData', [upload.none(), checklogin], async (req, res) => {
  const {email, password} = req.body;
  const loginResult = await loginUser(email, password);
  console.log('login: ', loginResult);
  if(loginResult.userID) {
    const accessToken = await createAccessToken({uid});
    const refreshToken = createRefreshToken();
    if(accessToken && refreshToken) {
      req.clearCookie();
      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.cookie('refreshToken', refreshToken, { httpOnly: true });
      res.send({status: 'ok', payload:{uid}});
      res.send({status: 'ok', payload:{ uid, component: userPanel }});
    }
  };
  res.send(loginResult);
});

router.get('/logout', async(req, res) => {

});

module.exports = router;