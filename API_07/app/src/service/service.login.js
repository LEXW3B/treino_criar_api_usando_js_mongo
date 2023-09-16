/* eslint-disable no-console */
const loginModel = require('../model/model.login');

async function getAll() {
  try {
    const login = await loginModel.getAll();

    if (!login) return null;

    return login;
  } catch (error) {
    console.error('Service getAll:', error);
    return null;
  }
}

async function create(email, password) {
  try {
    const login = await loginModel.create(email, password);

    if (!login) return null;

    return login;
  } catch (error) {
    console.error('Service create:', error);
    return null;
  }
}

module.exports = {
  getAll,
  create,
};
