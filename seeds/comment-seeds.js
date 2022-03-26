const { Comment } = require('../models');

const userComment = [
  {
    content: 'I love this post!',
    user_id: 3,
    post_id: 2,
  },
  {
    content: 'I enjoy working in the backend, databases are my thing!',
    user_id: 2,
    post_id: 3,
  },
  {
    content: 'I prefer the frontend, let my creativity flow!',
    user_id: 1,
    post_id: 3,
  },

];

const seedComments = () => Comment.bulkCreate(userComment);

module.exports = seedComments;