const express = require('express');
const router = express.Router();
const { pushGenre, getAllGenres } = require('../controllers/genre');
const { pushAuthor, getIdByName } = require('../controllers/author');
const { pushBook } = require('../controllers/book');
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

router.post('/searchAuthor', async (req, res) => {
  const data = req.body;
  console.log('Search author: ', data);
  const authorsList = await getIdByName(data.name);
  // console.log('authors list: ', authorsList);
  res.send(authorsList);
});

router.post('/addBook', async (req, res) => {
  const data = req.body;
  const resultPush = await pushBook(data);
  // console.log(data);
  console.log(resultPush);
});

module.exports = router;