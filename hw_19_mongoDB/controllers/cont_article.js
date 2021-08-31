const ArticleModel = require('../models/article');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


  const pushAuthor = async (userData) => {
    const article = new ArticleModel;
    article.author = userData.author;
    article.title = userData.title;
    article.text = userData.article;
    article.published = userData.dateCreated;
    const doc = await article.save();
    console.log(doc._id);
  };
  const searchArticle = async (searchData) => {
    const { title, author} = searchData;
    if(title) {
     const res = await ArticleModel.find({title});
     return res;
    };
    if(author) {
      const res = await ArticleModel.find({author})
      return res;
    }
  };

  const findArticleById = async (articleId) => {
    const selectedArticle = await ArticleModel.findById(ObjectId(articleId));
    return selectedArticle;
  }


module.exports =  {
  pushAuthor,
  searchArticle,
  findArticleById,
}