import express from 'express';
import { getUserId } from './utils.js';

const app = express();
const host = '0.0.0.0';
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/user/:id', (req, res) => {
  res.send(getUserId(req.params.id));
});

app.listen(port, host, () => {
  console.log(`Example app listening on ${host}:${port}`);
});
