
const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';
const authorsRouter = require('./authors');

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.use('/authors', authorsRouter);

app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`);
});