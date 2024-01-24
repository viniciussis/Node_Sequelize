const express = require('express');

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});

module.exports = app;
