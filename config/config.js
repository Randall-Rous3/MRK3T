require('dotenv').config()
module.exports = {
  development: {
    database: 'MRK3T',
    dialect: 'postgres'
  },
  test: {
    database: 'MRK3T_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}