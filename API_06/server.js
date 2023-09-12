const express = require('express');

const app = express();
app.use(express.json());
require('dotenv').config();

const port = process.env.PORT;

app.get('/', (_req, res) => {
  res.send("I'm me, and you who are is?");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`server running in: http:localhost:27017:${port}`);
});
