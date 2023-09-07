const userService = require('../service/users.service');

async function getAll(_req, res) {
  const users = await userService.getAll();

  if (!users || users.length === 0) {
    res.status(404).json({ message: 'Users not found' });

    return;
  }

  res.status(200).json(users);
};

async function getById(req, res) {
  const { id } = req.params;
  const REGEX = /^[0-9a-fA-F]{24}$/;

  if (!REGEX.test(id)) {
    res.status(404).send({ message: 'User not found' });
  };

  const user = await userService.getById(id);

  if (!user) {
    res.status(404).json({ message: 'User not found' });

    return;
  }

  res.status(200).json(user);
};

module.exports = {
  getAll,
  getById,
};