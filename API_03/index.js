
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send("Hello, i am  i! and who are you?");
});

app.listen(port, () => {
  console.log(`server running in: ${port}`);
});