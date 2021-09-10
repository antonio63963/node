const express = require('express');
const router = express.Router();
const { pushGenre, getAllGenres } = require('../controllers/genre');
const { pushAuthor } = require('../controllers/author');
const multer = require('multer');
const path = require('path');
const upload = multer({ dest: path.join(__dirname, '../public/uploads')});

router.get('/', async(req, res) => {
  const genres = await getAllGenres();
  // console.log('All GENRES: ', genres);
  res.render('admin', {genres: genres});
});

router.post('/addGenre', async (req, res) => {
  const data = req.body;
  console.log('Genre: ', data);
  const doc = await pushGenre(data);
  console.log('new genre doc: ', doc);
  res.send(doc);
});

router.post('/addAuthor', async (req, res) => {
  const data = req.body;
  console.log('Author: ', data);
  const doc = await pushAuthor(data);
  console.log('new author doc: ', doc);
  res.send(doc);
});

router.post('/addBook', upload.single('bookFile'), async (req, res) => {
  const data = req.body;
  console.log('Book: ', data);
  
});

module.exports = router;