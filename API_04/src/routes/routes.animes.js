const express = require('express');
const router = express.Router();
const animesController = require('../app/controller/anime.controller');

router.get('/', (_req, res) => {
  res.send('I am me, and who are you?');
});

router.get('/animes', animesController.getAll);
router.get('/anime/:id', animesController.getOne);
router.post('/anime', animesController.create);
router.put('/anime/:id', animesController.update);


module.exports = router;