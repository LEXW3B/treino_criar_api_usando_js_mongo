const express = require('express');

const app = express();
app.use(express.json());
require('dotenv').config();

const port = process.env.PORT;

app.get('/', require('./routers/router.login'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`server running in: http:localhost:27017:${port}`);
});
