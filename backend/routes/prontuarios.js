const router = require('express').Router();
const ctrl = require('../controllers/prontuarioController');

// Lista todos os prontuários
router.get('/', ctrl.renderView);

// Formulário para criar um novo prontuário
router.get('/novo', ctrl.renderFormNovo);

// Formulário para editar um prontuário existente
router.get('/editar/:id', ctrl.renderFormEditar);

// Cria um prontuário
router.post('/', ctrl.create);

// Atualiza um prontuário via formulário
router.post('/editar/:id', ctrl.update);

// Exclui um prontuário via formulário
router.post('/excluir/:id', ctrl.remove);

// APIs REST — essas ficam **por último**
router.get('/:id', ctrl.getById);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
