const knex = require('knex');

const connection = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'juakadb',
    password: 'juaka123',
    database: 'deusinho_api',
  },
});

module.exports = connection;
