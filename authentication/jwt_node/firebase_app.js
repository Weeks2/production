
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function obtenerInformacionUsuario(user) {
  try {
    const userRecords = await admin.auth().listUsers();
    const userRecord = userRecords.users.find(u => u.email === user);
    if (userRecord) {
      console.log(userRecord);
      console.log('ID del usuario:', userRecord.uid);
      console.log('Correo electrónico del usuario:', userRecord.email);
      console.log('Nombre del usuario:', userRecord.displayName);
      // ... otras propiedades del usuario
    } else {
      console.log('No se encontró un usuario con el correo electrónico especificado.');
    }
  } catch (error) {
    console.error('Error al obtener información del usuario:', error);
  }
}

async function autenticarUsuario(user, pass) {
  try {
    const userRecord  = await admin.auth().getUserByEmail(user);
    const isValid = await admin.auth().verifyPassword(pass, userRecord.uid);
   
    console.log(isValid,userRecord)
    if (pass === userRecord.password) {
      const token = await admin.auth().createCustomToken(uid);
      console.log('Autenticación exitosa');
      return token;
    } else {
      throw new Error('Credenciales inválidas');
    }
  } catch (error) {
    console.error('Error de autenticación:', error);
    throw new Error('Credenciales inválidas');
  }
}

async function crearUsuario(user, pass) {
  try {
    const userRecord = await admin.auth().createUser({
      email: user,
      password: pass,
    });

    console.log('Usuario creado exitosamente:', userRecord.uid);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
}




const usuario = 'user2@localhost.com';  
const pass = '000000';  
//obtenerInformacionUsuario(usuario);
//crearUsuario(usuario, pass);


autenticarUsuario(usuario, pass)
  .then(token => {
    console.log(token);
  })
  .catch(error => {
    console.error('Error de autenticación:', error);
  });
