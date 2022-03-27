const router = require('express').Router();
// import models needed - may not need User/Comments
const { User, Post, Comment } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['content', 'user_id']
        }
      ]
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      post,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;