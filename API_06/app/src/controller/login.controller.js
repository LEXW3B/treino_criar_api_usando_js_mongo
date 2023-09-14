/* eslint-disable no-console */
const loginService = require('../service/login.service');

async function getAll(_req, res) {
  try {
    const login = await loginService.getAll();

    if (!login) return res.status(404).json({ message: 'Login not found' });

    return res.status(200).json(login);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal error' });
  }
}

module.exports = {
  getAll,
};
