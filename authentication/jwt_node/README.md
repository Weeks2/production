Packages 
npm init

npm install --save-dev jest
npm install express jsonwebtoken

npx jest
node app.js

Ahora puedes probar la autenticación y autorización utilizando las siguientes rutas:

GET / - Ruta de inicio.
POST /login - Ruta para autenticar y generar un token JWT.
GET /protegido - Ruta protegida que requiere un token JWT válido para acceder.
Puedes utilizar herramientas como cURL o Postman para realizar solicitudes a las rutas y probar la funcionalidad de autenticación y autorización.

Ten en cuenta que este es solo un ejemplo básico de implementación de JWT en Node.js. En una implementación real, deberías considerar aspectos de seguridad adicionales, como el almacenamiento seguro del secreto y la validación de las credenciales del usuario. Además, se pueden agregar características como la gestión de roles y permisos para una autorización más granular.