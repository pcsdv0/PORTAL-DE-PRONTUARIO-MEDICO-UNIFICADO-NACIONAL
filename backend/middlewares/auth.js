const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Tenta extrair o token do header Authorization
  const authHeader = req.headers.authorization;
  let token = null;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    // Se vier como Bearer token
    token = authHeader.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    // Se vier como cookie
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Anexa dados do usuário ao objeto req
    req.userId = payload.id;
    req.usuario = payload; // opcional, se quiser acessar nome_usuario, funcao etc.

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
