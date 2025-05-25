const db = require('./db'); // Importa o pool de conexões ao banco de dados MySQL

// Retorna todos os pacientes cadastrados
exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM pacientes');
  return rows;
};

// Retorna um paciente específico pelo ID
exports.findById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM pacientes WHERE id = ?', 
    [id]
  );
  return rows[0];
};

// Cria um novo registro de paciente
exports.create = async ({ nome, data_nascimento, telefone, cpf }) => {
  const [res] = await db.query(
    'INSERT INTO pacientes (nome, data_nascimento, telefone, cpf) VALUES (?,?,?,?)',
    [nome, data_nascimento, telefone, cpf]
  );
  return { id: res.insertId, nome, data_nascimento, telefone, cpf };
};

// Atualiza campos de um paciente existente
exports.update = async (id, data) => {
  const keys = Object.keys(data).map(k => `${k} = ?`).join(', ');
  const vals = [...Object.values(data), id];
  await db.query(`UPDATE pacientes SET ${keys} WHERE id = ?`, vals);
  return { id, ...data };
};

// Remove um paciente pelo ID
exports.remove = async (id) => {
  await db.query('DELETE FROM pacientes WHERE id = ?', [id]);
};
