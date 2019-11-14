const express = require('express');

const AccountsRouter = require('./accounts/accountsRouter.js')

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountsRouter);


server.get('/', (req, res) => {
    res.send('<h3>DB  with knex</h3>');
  });
  
module.exports = server;