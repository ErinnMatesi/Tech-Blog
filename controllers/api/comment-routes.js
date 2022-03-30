const router = require('express').Router();
// import models needed - may not need User/Comments
const { User, Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const comment = await Comment.create({...req.body, user_id: userId});
    // console.log(comment);
    // res.status(200).json(comment);
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