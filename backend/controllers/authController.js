// controllers/authController.js

const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

exports.login = async (req, res) => {
  const { login, senha, funcao } = req.body;

  try {
    const usuario = await Usuario.findByUsername(login);

    if (!usuario || usuario.senha !== senha || usuario.funcao !== funcao) {
      return res.render('home', { error: 'Credenciais inválidas' }); // 'home' é a página de login
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: usuario.id, nome_usuario: usuario.nome_usuario, funcao: usuario.funcao },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Define o token como cookie httpOnly
    res.cookie('token', token, { httpOnly: true });

    // Renderiza a página pós-login: login.handlebars com os dados do usuário
    return res.render('login', { usuario });

  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).render('home', { error: 'Erro interno no servidor' });
  }
};
