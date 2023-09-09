const express = require('express');
const router = express.Router();
const animesController = require('../app/controller/anime.controller');

router.get('/', (_req, res) => {
  res.send('I am me, and who are you?');
});

router.get('/animes', animesController.getAll);


module.exports = router;