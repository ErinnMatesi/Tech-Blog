const { User } = require('../models');

const userData = [
  {
    username: 'Erinn',
    email: 'erinnmatesi@gmail.com',
    password: '123pass',
  },
  {
    username: 'Lernantino',
    email: 'lernantino@gmail.com',
    password: '123pass',
  },
  {
    username: 'Sal',
    email: 'sal@hotmail.com',
    password: '123pass',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;