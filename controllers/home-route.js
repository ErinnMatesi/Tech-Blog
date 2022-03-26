const router = require('express').Router();
// import models needed - may not need Comment
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

    const posts = postData.map((post) => this.post.get({ plain: true})
    );

    res.render('homepage', {
      posts,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;