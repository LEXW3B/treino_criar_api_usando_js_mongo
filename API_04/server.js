const express = require('express');
const app = express();

app.use(express.json());
require('dotenv').config();
const port = process.env.PORT;

app.get('/', (_req, res) => {
  res.send('I am me, and who are you?');
})

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
})