const { Post } = require('../models');

const postData = [
  {
    title: 'Modularity is Key',
    content: 'Modularity helps with sanity and debugging. When code is broken down into various files, it becomes easier to target specific bits of code whether you are looking to enhance or fix a bug.',
    user_id: 1,
  },
  {
    title: 'Agile Methods',
    content: 'When working on a project as a team, agile methods can be incredibly helpful in staying on track and getting ahead of problems. Kanban, an agile method, is a great way to keep track of your progress and get to the next step.',
    user_id: 2,
  },
  {
    title: 'Frontend vs Backend',
    content: 'Many developers find themselves drawn to front-end or back-end development. Front-end development is the process of creating a user interface. Back-end development is the process of creating a server-side application. Where you do you prefer to work? Comment to let us know!',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;