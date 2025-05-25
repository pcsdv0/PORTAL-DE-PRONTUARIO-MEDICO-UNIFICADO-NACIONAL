const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Testar a conexão
async function testarConexao() {
  try {
    const connection = await pool.getConnection();
    console.log('Conectado ao MySQL');
    connection.release();
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error);
  }
}

testarConexao();

module.exports = pool;
