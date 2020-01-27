// DOM HTML Back-end
const express = require('express');
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

app.get('/faq/', (req, res) => {
  res.sendFile('./faq.html', { root: __dirname });
});

app.get('/code-of-conduct/', (req, res) => {
  res.sendFile('./code-of-conduct.html', { root: __dirname });
});

// Speakers-Pointers
app.get('/speakers/benjamin/', (req, res) => {
  res.sendFile('./speakers-benjamin.html', { root: __dirname });
});

app.get('/speakers/alejandro/', (req, res) => {
  res.sendFile('./speakers-alejandro.html', { root: __dirname });
});

app.get('/speakers/gustavo/', (req, res) => {
  res.sendFile('./speakers-gustavo.html', { root: __dirname });
});

app.get('/speakers/andres/', (req, res) => {
  res.sendFile('./speakers-andres.html', { root: __dirname });
});