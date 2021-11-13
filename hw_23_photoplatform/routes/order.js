const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log("ORDER: ", req.body);
});

module.exports = router;