const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = 'secret';
app.get('/', (req, res) => { res.send('¡Bienvenido! Por favor, inicia sesión para obtener un token.'); });
app.post('/login', (req, res) => { const token = jwt.sign( {usuario:'usuario123'},secretKey, {expiresIn: '1h' });
  res.json({token});
});
app.get('/protegido', verificarToken, (req, res) => {res.status(200).json({ mensaje: 'Acceso permitido. Información confidencial.' });});
function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'Token no proporcionado. Acceso denegado.' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) { return res.status(401).json({ mensaje: 'Token no proporcionado. Acceso denegado.' }); }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) { return res.status(401).json({ mensaje: 'Token inválido. Acceso denegado.' }); }
    req.usuario = decoded.usuario;
    next();
  });
}

module.exports = app;
