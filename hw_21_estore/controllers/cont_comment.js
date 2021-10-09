const CommentModel = require('../models/comment');

const addComment = async (commentData) => {
  const comment = new CommentModel;
  comment.user = commentData.user;
  comment.product_id = commentData.product_id;
  comment.text = commentData.text;
  comment.promoderation = false;
  comment.isUpproove = false;
  const doc = await comment.save();
  console.log(doc._id);
  return doc;
};
const getCommentsByProductID = async (product_id) => {
  const comments = await CommentModel.find({product_id: product_id})
  .populate('user');
  return comments;
};


module.exports = {
  addComment,
  getCommentsByProductID
};
