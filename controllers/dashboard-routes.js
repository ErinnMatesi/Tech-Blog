const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const userData = await User.findByPk(userId, {
      include: [
        {
          model: Post,
          attributes: ['content', 'createdAt'],
        },
        {
          model: Comment,
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

router.delete('/:id', async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;