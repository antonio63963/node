const  express = require('express');
const  router = express.Router();
const ArticleModel = require('../models/article');

router.get('/:id', (req, res) => {
  console.log(req.params);
});

module.exports = router;