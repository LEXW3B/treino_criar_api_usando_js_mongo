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

  try {
    const existEmail = await loginService.getOne({ email });

    if (existEmail) {
      return res.status(400).json({ message: 'Email já está em uso controller' });
    }

    // Correção: Passe os argumentos separadamente
    await loginService.create(email, password);

    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.info('Erro ao criar usuário:', error);
    return res.status(500).json({ message: 'Erro ao criar usuário controller' });
  }
}

module.exports = {
  getAll,
  create,
};
