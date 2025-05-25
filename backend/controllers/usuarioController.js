// backend/controllers/usuarioController.js

const Usuario = require('../models/usuario'); // Importa o modelo Usuario para operações de banco de dados

// Recupera todos os usuários
exports.getAll = async (req, res, next) => {
  try {
    // Chama o método findAll do modelo para obter todos os registros de usuários
    const list = await Usuario.findAll();
    // Retorna a lista de usuários em formato JSON
    res.json(list);
  } catch (err) {
    // Encaminha qualquer erro para o middleware de tratamento de erros
    next(err);
  }
};

// Recupera um usuário específico pelo ID
exports.getById = async (req, res, next) => {
  try {
    // Busca o usuário pelo parâmetro de rota id
    const row = await Usuario.findById(req.params.id);
    // Se não encontrar nenhum registro, retorna status 404 com mensagem de erro
    if (!row) return res.status(404).json({ error: 'Usuário não encontrado' });
    // Caso encontre, retorna os dados do usuário em JSON
    res.json(row);
  } catch (err) {
    // Encaminha erros inesperados para o middleware de tratamento
    next(err);
  }
};

// Cria um novo usuário
exports.create = async (req, res, next) => {
  try {
    // Chama o método create do modelo, passando os dados recebidos no corpo da requisição
    const created = await Usuario.create(req.body);
    // Retorna o novo registro criado com status 201 (Criado)
    res.status(201).json(created);
  } catch (err) {
    // Encaminha erros para o middleware de tratamento
    next(err);
  }
};

// Atualiza um usuário existente pelo ID
exports.update = async (req, res, next) => {
  try {
    // Chama o método update do modelo, passando o id e os novos dados
    const updated = await Usuario.update(req.params.id, req.body);
    // Retorna o usuário atualizado em JSON
    res.json(updated);
  } catch (err) {
    // Encaminha erros para o middleware de tratamento
    next(err);
  }
};

// Remove um usuário pelo ID
exports.remove = async (req, res, next) => {
  try {
    // Chama o método remove do modelo para excluir o registro
    await Usuario.remove(req.params.id);
    // Retorna status 204 (Sem Conteúdo) indicando que a remoção foi bem-sucedida
    res.status(204).send();
  } catch (err) {
    // Encaminha erros para o middleware de tratamento
    next(err);
  }
};
