const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use('/', require('./routers/route.login'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running in => http://localhost:${port}`);
});
