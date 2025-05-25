// backend/routes/auth.js

const router = require('express').Router(); // Cria um roteador do Express
const ctrl   = require('../controllers/authController'); // Importa o controlador de autenticação

// Define rota POST para login, que chama o método login do authController
router.post('/', ctrl.login);

module.exports = router; // Exporta o roteador para ser usado na aplicação
