const path = require('path');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'juakadb',
      password: 'juaka123',
      database: 'deusinho_api',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'deusinho_api',
      user: 'juakadb',
      password: 'juaka123',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'deusinho_api',
      user: 'username',
      password: 'password',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
