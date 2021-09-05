const  express = require('express');
const  router = express.Router();
const { getAllBooks, insertGenre, deleteGenre, getBookById } = require('../controllers/book');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const books = await getAllBooks();
  
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');

// console.log(await getBookById('6134a4cebb009e11c3bdfb7b'));
  // insertGenre('6134a4cebb009e11c3bdfb7a', ['6134a04c60de4e15a6e086b2', '6134a04c60de4e15a6e086b3'])
  res.render('index', { title: 'Books', books});
});

module.exports = router;
