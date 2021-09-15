const CategoryModel = require('../models/category');

const insertCategory = async (userData) => {
  const category = new CategoryModel;
  category.name = userData.name;
  
  const doc = await category.save();
  console.log(doc._id);
  return doc;
};
const getAllCategories = async () => {
  const categories = await CategoryModel.find({}, {_id: 1, name: 1});
  return categories;
}

module.exports = {
  insertCategory,
  getAllCategories,
}