const express = require('express');

require('dotenv').config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get('/', (_req, res) => {
  res.send("i'm me, and you who is?");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`server running on port => http://localhost:${port}`);
});
