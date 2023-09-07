const userService = require('../service/users.service');

async function getAll(_req, res) {
  const users = await userService.getAll();

  if (!users || users.length === 0) {
    res.status(404).json({ message: 'Users not found' });

    return;
  }

  res.status(200).json(users);
};

module.exports = {
  getAll,
};