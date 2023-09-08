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

async function create(req, res) {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Invalid user' });
  
    return;
  }

  await userService.create(name);

  res.status(201).json({ message: 'User created' });
};

async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const REGEX = /^[0-9a-fA-F]{24}$/;

  if (!REGEX.test(id)) {
    res.status(404).send({ message: 'User not found' });
  };

  if (!name) {
    res.status(400).json({ message: 'Invalid user' });
  
    return;
  }

  await userService.update(id, name);

  res.status(200).json({ message: 'User updated' });
};

async function remove(req, res) {
  const { id } = req.params;
  const REGEX = /^[0-9a-fA-F]{24}$/;

  if (!REGEX.test(id)) {
    res.status(404).json({ message: 'User not found' });
  };

  await userService.remove(id);

  res.status(200).json({ message: 'User deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};