require('dotenv').config();
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './backend/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './backend/migrations'
    },
    seeds: {
      directory: './backend/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './backend/migrations'
    },
    seeds: {
      directory: './backend/seeds'
    }
  }
};
