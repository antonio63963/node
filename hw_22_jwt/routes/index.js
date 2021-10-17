var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
const { createAccessToken } = require('../controllers/ctrl_jwt')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', upload.none(), async (req, res) => {
  console.log(req.body);
  const uid = 25;
  const token = await createAccessToken({id: uid});
  console.log('TOKEN: ', token);
  res.send({status: 'ok', payload: {token}})
})

module.exports = router;
