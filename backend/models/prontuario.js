const db = require('./db'); // Importa o pool de conexões com o banco MySQL

// Retorna todos os prontuários cadastrados
exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM prontuarios');
  return rows;
};

// Retorna um prontuário específico pelo ID
exports.findById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM prontuarios WHERE id = ?', 
    [id]
  );
  return rows[0];
};

// Cria um novo prontuário
exports.create = async ({ paciente_id, descricao, data }) => {
  const [res] = await db.query(
    'INSERT INTO prontuarios (paciente_id, descricao, data) VALUES (?,?,?)',
    [paciente_id, descricao, data]
  );
  return { id: res.insertId, paciente_id, descricao, data };
};

// Atualiza um prontuário existente
exports.update = async (id, { descricao, data }) => {
  await db.query(
    'UPDATE prontuarios SET descricao = ?, data = ? WHERE id = ?',
    [descricao, data, id]
  );
  return { id, descricao, data };
};

// Remove um prontuário pelo ID
exports.remove = async (id) => {
  await db.query('DELETE FROM prontuarios WHERE id = ?', [id]);
};

// Retorna todos os prontuários com nome do paciente (JOIN)
exports.findAllWithPaciente = async () => {
  const [rows] = await db.query(`
    SELECT 
      prontuarios.id,
      prontuarios.data,
      prontuarios.descricao,
      pacientes.nome AS nome_paciente
    FROM prontuarios
    JOIN pacientes ON prontuarios.paciente_id = pacientes.id
  `);
  return rows;
};


