const loginService = require('../service/login.service');

async function getAll(_req, res) {
  const login = await loginService.getAll();

  if (!login || login.length === 0) {
    res.status(404).json({ message: 'Not Found' });

    return;
  }

  res.status(200).json(login);
}

async function create(req, res) {
  const { email, password } = req.body;

  const login = await loginService.create(email, password);

  if (!login) {
    res.status(400).json({ message: 'Bad Request' });

    return;
  }

  res.status(201).json({ message: 'Created' });
}

module.exports = {
  getAll,
  create,
};
