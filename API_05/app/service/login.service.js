const loginModel = require('../model/login.model');

async function getAll() {
  const login = await loginModel.getAll();

  if (!login) return null;

  return login;
}

async function getOne({ email }) {
  try {
    const user = await loginModel.getOne({ email });
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.info('Erro ao encontrar usuário:', error);
    throw error; // Lançar o erro para que seja tratado no controlador
  }
}

async function create(email, password) {
  const login = await loginModel.create(email, password);

  if (!login) return null;

  return { id: login.id, email, password };
}

module.exports = {
  getAll,
  getOne,
  create,
};
