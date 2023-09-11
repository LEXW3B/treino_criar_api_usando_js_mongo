const express = require('express');

const app = express();

app.use(express.json());
require('dotenv').config();

const port = process.env.PORT;

app.use('/', require('./routers/route.login'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`server running on port => http://localhost:${port}`);
});
