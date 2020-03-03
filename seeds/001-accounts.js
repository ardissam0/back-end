const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'admin',
          password: bcrypt.hashSync('test', 8)
        },
        {
          username: 'alex',
          password: bcrypt.hashSync('password', 8)
        },
        {
          username: 'grandma',
          password: bcrypt.hashSync('testing', 8)
        }
      ]);
    });
};
