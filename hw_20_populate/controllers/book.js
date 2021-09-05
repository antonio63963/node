const mongoose = require('mongoose');
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

module.exports = {
  pushBook
}