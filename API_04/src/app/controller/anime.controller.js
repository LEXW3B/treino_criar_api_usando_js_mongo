require('express');
const animeService = require('../service/anime.service');

async function getAll(req, res) {
  const animes = await animeService.getAll();

  if (!animes || animes.length === 0) {
    res.status().json({ message: 'No animes found' });

    return;
  }

  res.status(200).json(animes);
};

async function getOne(req, res) {
  const anime = await animeService.getOne(req.params.id);

  if (!anime) {
    res.status(404).json({ message: 'Anime not found' });

    return;
  }

  res.status(200).json(anime);
};

async function create(req, res) {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Invalid data' });

    return;
  }

  const anime = await animeService.create(name);

  if (!anime) {
    res.status(400).json({ message: 'Invalid data' });
  }

  res.status(201).json({ message: 'Anime created successfully' });
};

async function update(req, res) {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Invalid data' });

    return;
  }

  const anime = await animeService.update(req.params.id, name);

  if (!anime) {
    res.status(400).json({ message: 'Invalid data' });
  }

  res.status(200).json(anime);
};

async function remove(req, res) {
  await animeService.remove(req.params.id);

  res.status(200).json({ message: 'Anime deleted successfully' });
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};