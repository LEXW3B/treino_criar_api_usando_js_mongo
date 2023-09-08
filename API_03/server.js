
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const usersController = require('./src/msc/controller/users.controller');

app.use(express.json());

app.get('/', (_req, res) => {
  res.send("Hello, i am  i! and who are you?");
});

app.get('/users', usersController.getAll);
app.get('/users/:id', usersController.getById);
app.post('/users', usersController.create);
app.put('/users/:id', usersController.update);
app.delete('/users/:id', usersController.removed);

app.listen(port, () => {
  console.log(`server running in: http://localhost:${port}`);
});