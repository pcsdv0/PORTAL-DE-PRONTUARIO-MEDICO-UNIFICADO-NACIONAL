// backend/models/usuario.js

const db = require('./db'); // Importa o pool de conexões com o banco de dados MySQL

// Busca um usuário pelo nome de usuário (para login)
exports.findByUsername = async (nome_usuario) => {
  // Executa SELECT filtrando pelo campo nome_usuario
  const [rows] = await db.query(
    'SELECT * FROM usuarios WHERE nome_usuario = ?',
    [nome_usuario]
  );
  // Retorna o primeiro registro encontrado (ou undefined se não existir)
  return rows[0];
};

// Retorna todos os usuários cadastrados (campos básicos)
exports.findAll = async () => {
  // Executa SELECT para obter id, nome_usuario, funcao e data_cadastro
  const [rows] = await db.query(
    'SELECT id, nome_usuario, funcao, data_cadastro FROM usuarios'
  );
  return rows; // Retorna array de objetos de usuário
};

// Busca um usuário específico pelo ID (campos básicos)
exports.findById = async (id) => {
  // Executa SELECT com filtro por id
  const [rows] = await db.query(
    'SELECT id, nome_usuario, funcao, data_cadastro FROM usuarios WHERE id = ?',
    [id]
  );
  return rows[0]; // Retorna o registro encontrado
};

// Cria um novo usuário (não retorna senha por segurança)
exports.create = async ({ nome_usuario, senha, funcao }) => {
  // Insere novo registro na tabela usuarios
  const [res] = await db.query(
    'INSERT INTO usuarios (nome_usuario, senha, funcao) VALUES (?,?,?)',
    [nome_usuario, senha, funcao]
  );
  // Retorna objeto com id gerado e dados relevantes (sem senha)
  return { id: res.insertId, nome_usuario, funcao };
};

// Atualiza dados de um usuário existente (nome de usuário e função)
exports.update = async (id, { nome_usuario, funcao }) => {
  // Executa UPDATE definindo novos valores para nome_usuario e funcao
  await db.query(
    'UPDATE usuarios SET nome_usuario = ?, funcao = ? WHERE id = ?',
    [nome_usuario, funcao, id]
  );
  // Retorna o objeto com id e valores atualizados
  return { id, nome_usuario, funcao };
};

// Remove um usuário pelo ID
exports.remove = async (id) => {
  // Executa DELETE na tabela usuarios filtrando pelo id
  await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
};
