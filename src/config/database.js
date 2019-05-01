require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: "./__tests__/database.sqlite", //onde o banco sqlite é salvo
  logging: false,
  operatorsAliases: false,
  define: {
    timestamps: true, // createdAt e updatedAt por padrão em todas as tabelas
    underscored: true, // as tabelas serão em caixa baixa e formato underscored
    underscoredAll: true
  }
};
