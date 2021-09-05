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
};
const getAllBooks = async () => {
  const books = await BookModel.find({})
  .populate('author')
  .populate('genre')
    // .exec();
  console.log('RESULT', books);
  return books;
}
const insertGenre = async (bookId, arrGenre) => {
  BookModel.updateOne({_id: bookId}, {
    $push: {ganres: {$each: arrGenre}}
  }, (err, res) => {
    if(err) console.log('ERROR: ', err);
    if(res) console.log('RES: ', res);
  })
}
const deleteGenre = async (bookId) => {
  BookModel.updateOne({_id: bookId}, {
    $pop: {ganres: 1}
  }, (err, res) => {
    if(err) console.log('ERROR: ', err);
    if(res) console.log('RES: ', res);
  })
}
const getBookById = async (bookId) => {
  return await BookModel.findById(bookId)
}
module.exports = {
  pushBook,
  getAllBooks,
  insertGenre,
  deleteGenre,
  getBookById,
}