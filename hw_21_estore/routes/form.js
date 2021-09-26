const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registration, login } = require('../controllers/jsonSchema/cont_formUser');
const { createUser, loginUser, checkUserByEmail } = require('../controllers/cont_user');

router.get('/login', async (req, res) => {
  res.render('login', {noSuchUser: false});
});
router.get('/registration', async (req, res) => {
  res.render('registration')
});
// POST
router.post('/regData', registration, async (req, res) => {
  const reqData = req.body;
  const user = await checkUserByEmail(reqData);
  if(user.length == 0) {
    const newUser = createUser(reqData);
  };
});
router.post('/logData', [upload.none(), login], async (req, res) => {
  const userData = req.body;
  console.log('[[[[[[[[', userData);
  const isLogin = await loginUser(userData);
  console.log('isLogin:::::::', isLogin);
  res.send({login: isLogin});
});

module.exports = router;