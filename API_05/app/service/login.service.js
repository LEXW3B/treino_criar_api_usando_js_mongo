const loginModel = require('../model/login.model');

async function getAll() {
  const login = await loginModel.getAll();

  if (!login) return null;

  return login;
}

async function create(email, password) {
  const login = await loginModel.create(email, password);

  if (!login) return null;

  return { id: login.id, email, password };
}

module.exports = {
  getAll,
  create,
};
