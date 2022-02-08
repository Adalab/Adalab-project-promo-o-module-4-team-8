// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

//Base de datos
const Database = require('better-sqlite3');
const db = new Database('./src/data/cards.db', { verbose: console.log });

//importamos uuid
const { v4: uuidv4 } = require('uuid');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
//server.use(express.json());
server.use(express.json({ limit: '10mb' }));

// para el motor de plantillas
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  if (
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.email !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== ''
  ) {
    const newCardData = {
      ...req.body,
      id: uuidv4(),
    };
    const local_host = `http://localhost:4000/card/${newCardData.id}`;
    const insertData =
      db.prepare(`INSERT INTO cards(uuid, palette, name, job,phone,email,linkedin,github, photo ) 
    VALUES (?,?,?,?,?,?,?,?,?)`);
    insertData.run(
      newCardData.id,
      newCardData.palette,
      newCardData.name,
      newCardData.job,
      newCardData.phone,
      newCardData.email,
      newCardData.linkedin,
      newCardData.github,
      newCardData.photo
    );
    const responseSuccess = {
      success: true,
      cardURL: local_host,
    };

    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      cardURL: 'error',
    };
    res.json(responseError);
  }
});

//servidor de estátivos
const staticServerPath = './src/public-react';
const staticServerPathStyle = './src/public-css';
server.use(express.static(staticServerPath));
server.use(express.static(staticServerPathStyle));

// servidor dinamico

server.get('/card/:cardId', (req, res) => {
  const paramCard = req.params.cardId;
  // console.log(paramCard);
  const query = db.prepare(
    `SELECT *
    FROM cards
    WHERE uuid = ?
    `
  );
  const userCard = query.get(paramCard);
  res.render('card', userCard);
});
