npm install --save-dev jest
npx jest

Para probar la implementación de JWT en Node.js que te proporcioné,
 puedes utilizar una herramienta de API testing como Postman o realizar solicitudes HTTP utilizando cURL desde la línea de comandos.

A continuación, te muestro cómo probar cada una de las rutas utilizando cURL:


Ruta de inicio (GET /):
 
curl http://localhost:3000
Esto debería devolver el mensaje de bienvenida.

Ruta de autenticación (POST /login):

curl -X POST http://localhost:3000/login
Esto generará un token JWT y te devolverá la respuesta JSON con el token. Puedes almacenar este token para usarlo en la siguiente solicitud protegida.

Ruta protegida (GET /protegido):
 
curl -H "Authorization: Bearer <TOKEN>" http://localhost:3000/protegido
Reemplaza <TOKEN> con el token JWT que obtuviste en el paso anterior. Esto hará una solicitud a la ruta protegida y verificará el token. Si el token es válido, recibirás una respuesta JSON con el mensaje de acceso permitido.

Ten en cuenta que si estás utilizando Postman, puedes ingresar las URL y encabezados directamente en la interfaz gráfica de Postman para realizar las solicitudes y ver las respuestas.

Recuerda que este es solo un ejemplo básico de implementación de JWT y que deberías considerar aspectos de seguridad adicionales en una implementación real, como almacenar el secreto de manera segura y realizar validaciones adicionales en tu aplicación.




