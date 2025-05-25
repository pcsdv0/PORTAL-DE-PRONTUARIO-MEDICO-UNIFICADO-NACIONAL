const { format } = require('date-fns');
const Paciente = require('../models/paciente');

//  Renderiza a view de listagem dos pacientes
exports.renderView = async (req, res, next) => {
  try {
    const lista = await Paciente.findAll();

    const pacientes = lista.map(p => ({
      ...p,
      data_nascimento: format(new Date(p.data_nascimento), 'dd/MM/yyyy'),
      data_cadastro: format(new Date(p.data_cadastro), 'dd/MM/yyyy')
    }));

    res.render('pacientes', { pacientes });
  } catch (err) {
    next(err);
  }
};

//  Renderiza o formulário para cadastrar novo paciente
exports.renderFormNovo = (req, res) => {
  res.render('pacienteNovo'); // o nome deve ser o mesmo do arquivo da view
};

//  API: Retorna todos os pacientes em JSON
exports.getAll = async (req, res, next) => {
  try {
    const list = await Paciente.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

//  API: Retorna um paciente por ID
exports.getById = async (req, res, next) => {
  try {
    const row = await Paciente.findById(req.params.id);
    if (!row) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json(row);
  } catch (err) {
    next(err);
  }
};

//  Cria um novo paciente e redireciona para a lista
exports.create = async (req, res, next) => {
  try {
    await Paciente.create(req.body);
    res.redirect('/pacientes'); // Redireciona após criar
  } catch (err) {
    next(err);
  }
};
// Atualiza um paciente existente
exports.update = async (req, res, next) => {
  try {
    await Paciente.update(req.params.id, req.body);
    res.redirect('/pacientes');  // Redireciona após salvar
  } catch (err) {
    next(err);
  }
};




exports.renderFormEditar = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) {
      return res.status(404).send('Paciente não encontrado');
    }
    res.render('pacienteEditar', { paciente });
  } catch (err) {
    next(err);
  }
};


//  Remove um paciente por ID
exports.remove = async (req, res, next) => {
  try {
    await Paciente.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
