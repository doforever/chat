const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/client')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use((req, res) => {
  res.status(404).send('Not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});