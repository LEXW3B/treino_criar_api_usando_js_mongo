const express = require('express');
const app = express();

app.use(express.json());
require('dotenv').config();
const port = process.env.PORT;

app.use('/', require('./src/routes/routes.animes'));

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});