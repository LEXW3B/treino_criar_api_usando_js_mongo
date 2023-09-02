const express = require('express')
const app = express()
const port = 3000


const users = [
  "João Jatobá", "José Joaquim", "Patricia Pimentel", "Maria Madalena"
];

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

// READ ALL
app.get('/users', (_req, res) => {
  res.status(201).send(users);
});

// READ ONE
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id - 1];

  if (!user) {
    res.status(404).send({ message: 'User not found' });
  };

  res.status(200).send(user);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})