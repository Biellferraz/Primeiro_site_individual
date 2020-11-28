module.exports = {
  production: {
    username: 'GabrielFerraz',
    password: '#Gf47650707865',
    database: 'CadastroUsuario',
    host: 'exoticars.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
