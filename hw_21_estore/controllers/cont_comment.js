const CommentModel = require('../models/comment');

const addComment = async (commentData) => {
  const comment = new CommentModel;
  comment.user = commentData.user;
  comment.product_id = commentData.product_id;
  comment.text = commentData.text;
  const doc = await comment.save();
  console.log(doc._id);
  return doc;
};


module.exports = {
  addComment
};
