// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/class_directory'

  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL

  }

};
