const router = require('express').Router();
// import models needed - may not need User/Comments
const { User, Post, Comment } = require('../../models');

// router.get('/', async (req, res) => {
// 	try {
// 		const posts = await Post.findAll();
//     res.json(posts);
// 	} catch (err) {
// 		res.status(400).json({ message: err });
// 	}
// });

router.post('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const post = await Post.create({...req.body, user_id: userId});
    // console.log(post);
    res.json(post);  
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(400).json({ message: "Could not find post" });
      return;
    }
    const deletedPost = await postData.destroy();
    if (!deletedPost) {
      res.status(400).json({ message: "Could not delete post" });
      return;
    } else {
      res.status(200).json(deletedPost);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;