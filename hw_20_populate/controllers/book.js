const { query } = require('express');
const BookModel = require('../models/book');

const pushBook = async (userData) => {
  const book = new BookModel;
  book.author = userData.author;
  book.title = userData.title;
  book.description = userData.description;
  book.genre = userData.genre;
  book.pic = userData.pic;
  const doc = await book.save();
  console.log('new book: ', doc._id);
  return doc;
};


const getAllBooks = async () => {
  const books = await BookModel.find({})
  .populate('author')
  .populate('genre')
    // .exec();
  // console.log('RESULT', books);
  return books;
};
const insertGenre = async (bookId, arrGenre) => {
  BookModel.updateOne({_id: bookId}, {
    $push: {genre: {$each: arrGenre}}
  }, (err, res) => {
    if(err) console.log('ERROR: ', err);
    if(res) console.log('RES: ', res);
  })
};
const deleteGenre = async (bookId) => {
  BookModel.updateOne({_id: bookId}, {
    $pop: {genre: 1}
  }, (err, res) => {
    if(err) console.log('ERROR: ', err);
    if(res) console.log('RES: ', res);
  })
};

const getBookById = async (bookId) => {
  return await BookModel.findById(bookId)
};

const searchBooks = async (userData) => {
  console.log('USER: ', userData);
  let queryObj = {};
  for(let i in userData) {
    if(userData[i]) {
      queryObj[i] = userData[i];
    }
  }
  console.log('result obj: ', queryObj);
  const genreOrder = await BookModel.find(queryObj)
    .populate('genre')
    .populate('author')
    // .exec((err, res) => {
    //   if(err) console.log('ERROR: ', err)
    //   else console.log('EXEC: ', res)
    // })
    console.log('GENRE: ', genreOrder);
    return genreOrder;
  };

module.exports = {
  pushBook,
  getAllBooks,
  insertGenre,
  deleteGenre,
  getBookById,
  searchBooks,
  
}