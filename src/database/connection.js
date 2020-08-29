const knex = require('knex');
const moment = require('moment');

const connection = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'juakadb',
    password: 'juaka123',
    database: 'deusinho_api',
    timezone: 'UTC',
    typeCast(field, next) {
      if (field.type === 'DATETIME') {
        return moment(field.string()).format('YYYY-MM-DD HH:mm:ss');
      }
      return next();
    },
  },
});

module.exports = connection;
