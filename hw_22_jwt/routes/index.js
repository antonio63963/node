var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', upload.none(), async (req, res) => {
  console.log(req.body);
})

module.exports = router;
