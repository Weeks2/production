const axios = require('axios');
/**
 * Error al validar las credenciales: INVALID_PASSWORD
christian@legend jwt_node % node credencialAPI.js
Error al validar las credenciales: EMAIL_NOT_FOUND
https://cloud.google.com/identity-platform/docs/use-rest-api
 */
const email = 'user2@localhost.com';
const password = '000000';
const apiKey = "AIzaSyCNBJ7XjaLkMQgh16vpt5d2obbP8Z-Th54";


async function validarToken(idToken, apiKey) {
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,{idToken});
      const { users } = response.data;
  
      if (users.length > 0) {
        const { localId, email } = users[0];
        console.log('Token válido');
        console.log('Local ID:', localId);
        console.log('Email:', email);
      } else {
        console.log('Token inválido');
      }
    } catch (error) {
      console.error('Error al validar el token:', error.response.data.error.message);
    }
  }
async function getNewToken(email, password) {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, 
    { email: email,password: password, returnSecureToken: true });
    return response.data.idToken;
  } catch (error) {
    console.error('Error al validar las credenciales:', error);
    return null;
  }
}


getNewToken(email, password).then(token => {
    console.log(token);
    validarToken(token,apiKey);

  })
  .catch(error => {
    console.error('Error de autenticación:', error);
  });;


