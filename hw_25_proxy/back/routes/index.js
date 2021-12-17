var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  console.log('it has reached the server!');
  res.send({status: 'success', payload: { id: 1 }});
});

module.exports = router;
