const loginService = require('../service/login.service');

async function getAll(_req, res) {
  const login = await loginService.getAll();

  if (!login || login.length === 0) {
    res.status(404).json({ message: 'Not Found' });

    return;
  }

  res.status(200).json(login);
}

module.exports = {
  getAll,
};
