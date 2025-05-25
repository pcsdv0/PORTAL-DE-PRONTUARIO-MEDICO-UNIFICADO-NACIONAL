const { format } = require('date-fns');
const Prontuario = require('../models/prontuario'); // Modelo do prontuário
const Paciente = require('../models/paciente');     // Modelo do paciente

// Exibe todos os prontuários na view (com datas formatadas)
exports.renderView = async (req, res, next) => {
  try {
    const lista = await Prontuario.findAllWithPaciente(); // Deve trazer nome do paciente
    const prontuarios = lista.map(p => ({
      ...p,
      data: format(new Date(p.data), 'dd/MM/yyyy')
    }));

    res.render('prontuarios', { prontuarios });
  } catch (err) {
    next(err);
  }
};

// Rota para exibir o formulário de criação de prontuário
exports.renderFormNovo = async (req, res, next) => {
  try {
    const pacientes = await Paciente.findAll(); // Busca todos os pacientes
    res.render('prontuarioNovo', { pacientes }); // Envia para a view
  } catch (err) {
    next(err);
  }
};

// Rota para exibir o formulário de edição de prontuário
exports.renderFormEditar = async (req, res, next) => {
  try {
    const prontuario = await Prontuario.findById(req.params.id);
    const pacientes = await Paciente.findAll();

    if (!prontuario) {
      return res.status(404).send('Prontuário não encontrado');
    }

    res.render('prontuarioEditar', {
      prontuario,
      pacientes
    });
  } catch (err) {
    next(err);
  }
};

// Retorna todos os prontuários em JSON (API)
exports.getAll = async (req, res, next) => {
  try {
    const list = await Prontuario.findAllWithPaciente();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Retorna um prontuário por ID (API)
exports.getById = async (req, res, next) => {
  try {
    const row = await Prontuario.findById(req.params.id);
    if (!row) return res.status(404).json({ error: 'Prontuário não encontrado' });
    res.json(row);
  } catch (err) {
    next(err);
  }
};

// Cria um novo prontuário
exports.create = async (req, res, next) => {
  try {
    await Prontuario.create(req.body);
    res.redirect('/prontuarios'); // Redireciona após salvar
  } catch (err) {
    next(err);
  }
};

// Atualiza um prontuário existente
exports.update = async (req, res, next) => {
  try {
    await Prontuario.update(req.params.id, req.body);
    res.redirect('/prontuarios'); // Redireciona após atualizar
  } catch (err) {
    next(err);
  }
};

// Remove um prontuário pelo ID
exports.remove = async (req, res, next) => {
  try {
    await Prontuario.remove(req.params.id);
    res.redirect('/prontuarios'); // Redireciona após excluir
  } catch (err) {
    next(err);
  }
};
