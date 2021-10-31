const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registration, checklogin } = require('../middlewares/jsonSchema/check_formUser');
const { createUser, loginUser, checkUserByEmail } = require('../controllers/cont_user');

// POST
router.post('/signUpData', registration, async (req, res) => {
  const reqData = req.body;
  const user = await checkUserByEmail(reqData);
  if(!user) {
    const newUser = await createUser(reqData);
    
    res.send({login: true})
  };
});
router.post('/loginData', [upload.none(), checklogin], async (req, res) => {
  const {email, password} = req.body;
  const loginResult = await loginUser(email, password);
  console.log('login: ', loginResult);
  if(loginResult.userID) {
    
  };
  res.send(loginResult);
});

router.get('/logout', async(req, res) => {

});

module.exports = router;