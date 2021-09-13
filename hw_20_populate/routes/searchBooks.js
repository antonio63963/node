const  express = require('express');
const  router = express.Router();
const { searchBooks } = require('../controllers/book')


/* GET home page. */
router.post('/', async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const bookList = await searchBooks(data);
  console.log('BOOK LIST: ', bookList);
  res.send(JSON.stringify(bookList));
});


module.exports = router;