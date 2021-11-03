const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registration, checklogin } = require('../middlewares/jsonSchema/check_formUser');
const { createUser, loginUser, checkUserByEmail } = require('../controllers/cont_user');
const { createAccessToken, createRefreshToken, createTokenDoc } = require('../controllers/ctrl_jwt');
const validateAccessToken = require('../middlewares/validateAccess');
const userPanel = require('../components/userPanel');

// POST
router.all('/*', validateAccessToken);

router.post('/signUpData', upload.none(), registration, async (req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    res.send({status: 'ok', payload:{ uid, name,  component: userPanel }});
  } else {
    const reqData = req.body;
    console.log('REqData: ', reqData);
    const user = await checkUserByEmail(reqData);
    if(!user) {
      const newUser = await createUser(reqData);
      console.log("new user: ", newUser);
      const { _id: uid , name } = newUser;
      console.log("EBUCHIY UID: ", uid.toString());
      const accessToken = await createAccessToken({uid, name});
      const refreshToken = createRefreshToken();
      const token_id = await createTokenDoc(uid, refreshToken);
      if(accessToken && refreshToken) {
        res.cookie('accessToken', accessToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        res.send({status: 'ok', payload:{ uid, name, component: userPanel }});
      }
    } else {
      res.send({status: 'error', message: 'This user already exists'})
    };
  }
});

router.post('/loginData', [upload.none(), checklogin], async (req, res) => {
  const { email, password, auth } = req.body;
  if(auth) {
    console.log('RES: ', res);
    res.send({status: 'ok'});
    return;
  }
  const loginResult = await loginUser(email, password);
  console.log('login: ', loginResult);
  if(loginResult) {
    const { uid, name } = loginResult;
    console.log('USER ID: ', loginResult.uid);
    const accessToken = await createAccessToken({uid, name});
    const refreshToken = createRefreshToken();
    // const token_id = await createTokenDoc(uid, refreshToken);
    if(accessToken && refreshToken) {
      console.log(`i'm inside the loginData!!!`);
      res.clearCookie();
      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.cookie('refreshToken', refreshToken, { httpOnly: true });
      res.send({status: 'ok'});
    }
  };
  res.render('login');
});

router.get('/logout', async(req, res) => {

});

module.exports = router;