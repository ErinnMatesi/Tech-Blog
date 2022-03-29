const router = require('express').Router();
// import models needed - may not need User/Comments ?
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const postData = await Post.findByPk(userId, {
      include: [
        {
          model: Post,
          attributes: ['content, createdAt'],
        },
      ]
    });
    console.log(postData);
    const posts = postData.get({ plain: true });
    console.log(posts);

    const commentData = await Comment.findByPk(userId, {
      include: [
        {
          model: Comment,
          attributes: ['content, createdAt']
        },
      ]
    });

    const comments = commentData.get({ plain: true });
    console.log(comments);

    res.render('dashboard', {
      posts,
      comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// router.post('/', async (req, res) => {
//   try {

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err)
//   }
// });

router.delete('/:id', async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;