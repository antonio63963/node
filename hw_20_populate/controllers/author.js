const mongoose = require('mongoose');
const AuthorModel = require('../models/author');

const pushAuthor = async (userData) => {
  const author = new AuthorModel;
  author.name = userData.name;
  const doc = await author.save();
  console.log(doc._id);
  return doc;
};

const getIdByName = async (partOfName) => {
  const regular = new RegExp(partOfName, 'i');
  const authors = await AuthorModel.find({name: {$regex: regular}}, {_id: 1, name: 1});
  console.log('REGEX: ', authors);
  return authors;
}

module.exports = {
  pushAuthor,
  getIdByName,
}