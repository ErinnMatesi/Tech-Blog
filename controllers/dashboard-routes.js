const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const userData = await User.findByPk(userId, {
      include: [
        {
          model: Post,
        },
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ['username']
          }],
          attributes: ['content', 'createdAt']
        },
      ]
      
    });
   
    const data = userData.get({ plain: true });
    console.log(data);

    res.render('dashboard', {
      data,
      loggedIn: req.session.loggedIn,
    });
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