/* eslint-disable no-console */
const loginService = require('../service/service.login');

async function getAll(_req, res) {
  try {
    const login = await loginService.getAll();

    if (!login) return res.status(404).json({ message: 'Error Login not found' });

    return res.status(200).json(login);
  } catch (error) {
    console.error('Controller getAll:', error);
    return res.status(500).json({ message: 'Error when searching all users' });
  }
}

async function create(req, res) {
  try {
    const { email, password } = req.body;

    const login = await loginService.create(email, password);

    if (!login) return res.status(500).json({ message: 'Login not found' });

    return res.status(201).json({ message: 'Login created successfully' });
  } catch (error) {
    console.error('Controller create:', error);
    return res.status(500).json({ message: 'Error when creating user' });
  }
}

module.exports = {
  getAll,
  create,
};
