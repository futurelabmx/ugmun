// DOM HTML Back-end
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/acerca-de/', (req, res) => {
  res.sendFile('./acerca_de.html', { root: __dirname });
});

app.get('/acercade/', (req, res) => {
  res.sendFile('../acerca_de.html', { root: __dirname });
});