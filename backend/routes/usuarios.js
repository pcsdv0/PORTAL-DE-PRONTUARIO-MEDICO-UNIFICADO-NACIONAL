// backend/routes/usuarios.js

const router = require('express').Router();               // Cria um roteador do Express
const ctrl   = require('../controllers/usuarioController'); // Importa o controlador de usuários

// Rota GET "/" — chama ctrl.getAll para listar todos os usuários
router.get('/',    ctrl.getAll);

// Rota GET "/:id" — chama ctrl.getById para buscar um usuário pelo ID
router.get('/:id', ctrl.getById);

// Rota POST "/" — chama ctrl.create para criar um novo usuário
router.post('/',   ctrl.create);

// Rota PUT "/:id" — chama ctrl.update para atualizar um usuário existente
router.put('/:id', ctrl.update);

// Rota DELETE "/:id" — chama ctrl.remove para excluir um usuário pelo ID
router.delete('/:id', ctrl.remove);

module.exports = router; // Exporta o roteador para uso na aplicação principal
