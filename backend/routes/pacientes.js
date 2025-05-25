// routes/pacientes.js

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pacienteController');

// Rota GET "/novo" — renderiza o formulário de novo paciente
router.get('/novo', ctrl.renderFormNovo);

// Rota GET "/" — renderiza a lista de pacientes
router.get('/', ctrl.renderView);

// Rota GET "/editar/:id" — renderiza o formulário de edição de paciente
router.get('/editar/:id', ctrl.renderFormEditar);

// Rota POST "/editar/:id" — processa o formulário de edição de paciente
router.post('/editar/:id', ctrl.update);

// Rota POST "/excluir/:id" — processa exclusão via formulário
router.post('/excluir/:id', ctrl.remove);

// Rota POST "/" — cria novo paciente
router.post('/', ctrl.create);

// Rota GET "/api/:id" — retorna dados de um paciente por ID (formato JSON - API)
router.get('/api/:id', ctrl.getById);

module.exports = router;
