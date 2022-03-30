const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true}));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/login', async (req, res) => {
  try {

    res.render('login')
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ['username']
          }],
          attributes: ['content']
        }
      ]
    });

    const post = postData.get({ plain: true });
    console.log(post);
    res.render('post', {
      post,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;