const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('./app');
const secretKey = 'secret';
describe('Pruebas de autenticación y autorización', () => {
  let token;
  it('test 1 : debería generar un token JWT válido al autenticar', async () => {
    const response = await request(app).post('/login');
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
    token = response.body.token;
  });

  it('test 2 : debería permitir el acceso a la ruta protegida con un token válido', async () => {
    const response = await request(app).get('/protegido').set('Authorization', `Bearer ${token}`).expect(200); 
    expect(response.body.mensaje).toBe('Acceso permitido. Información confidencial.');
  });

  it('test 3 : debería denegar el acceso a la ruta protegida sin un token', async () => {
    const response = await request(app).get('/protegido');
    expect(response.statusCode).toBe(401);
    expect(response.body.mensaje).toBe('Token no proporcionado. Acceso denegado.');
  });

  it('test 4 : debería denegar el acceso a la ruta protegida con un token inválido', async () => {
    const tokenInvalido = jwt.sign({ usuario: 'usuario123' }, 'secreto_invalido');
    const response = await request(app).get('/protegido').set('Authorization', `Bearer ${tokenInvalido}`).expect(401);
    expect(response.body.mensaje).toBe('Token inválido. Acceso denegado.');
  });
});
