// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');



// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
//server.use(express.json());
server.use(express.json({limit: '10mb'}))

// para el motor de plantillas
server.set('view engine', 'ejs');


// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {

  const remote_server = 'https://awesome-profile-cards.herokuapp.com/card';
 // const error = "error en la descripción" 

  
  const responseSuccess = {
    "success": true,
    "cardUrl": remote_server,
  };

  const responseError = {
    "success": false,
    "cardUrl": error,
   };

    if (req.body.name !== '' && req.body.job !== '' && req.body.email !== '' && req.body.linkedin !== '' && req.body.github !== '') {
      res.json(responseSuccess)
    } else  {
      
      res.json(responseError)

    }
});

//servidor de estátivos
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

// servidor dinamico

server.get('/card/:cardId', (req, res) => { 

 const paramCard = req.params.cardId;
 // para buscar la info (falta hacerlo)

//  res.render("card",  buscar lo que falta )
 

 });