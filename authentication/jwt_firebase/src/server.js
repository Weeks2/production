const express = require("express");
const axios = require('axios')
const cors = require('cors');
const middleware = require('./middleware')
const app = express();
const port = 8083;
const apiKey = "AIzaSyCNBJ7XjaLkMQgh16vpt5d2obbP8Z-Th54";

//app.use(middleware.decodeToken)
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors());


app.post('/token', async (req, res) => {
    try {
      const { email, password } = req.body;
        if (!email || !password) { 
            return res.status(400).json({ error: 'Faltan parámetros requeridos' });
        }
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email,password,returnSecureToken: true
        }
      );
      const token = response.data.idToken;
      const tokenWithoutQuotes = token.replace(/"/g, '');
      res.send(tokenWithoutQuotes);
    } catch (error) {
      res.status(500).json({ error: 'Error en la solicitud' });
    }
  });
  
app.get('/api/todos',middleware.decodeToken,(req,res) => {
    return res.json({
        todos: [
            {title:'task1'},
            {title:'task2'},
            {title:'task3'}
        ]
    });
});



app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });
  
