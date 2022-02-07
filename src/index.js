// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

//importamos uuid
const { v4: uuidv4 } = require('uuid');
const req = require('express/lib/request');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
//server.use(express.json());
server.use(express.json({ limit: '10mb' }))

// para el motor de plantillas
server.set('view engine', 'ejs');


// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  if (req.body.name !== '' && req.body.job !== '' && req.body.email !== '' && req.body.linkedin !== '' && req.body.github !== '') {
    const newCardData = {
      ...req.body,
      id: uuidv4()
    }
    savedCards.push(newCardData)
    res.json(responseSuccess)
  } else {
    res.json(responseError)
  }

  const local_host = `http://localhost:4000/card/${newCardData.id}`;
  // const error = "error en la descripción" 
  console.log(newCardData);

  const responseSuccess = {
    "success": true,
    "cardUrl": local_host,
  };

  const responseError = {
    "success": false,
    "cardUrl": error,
  };
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