const express = require('express');

const router = express.Router();
const loginController = require('../app/controller/login.controller');
const { validEmail } = require('../middleware/authMiddleware');

router.get('/', (_req, res) => {
  res.send("i'm me, and you who is?");
});

router.get('/login', loginController.getAll);
router.post('/login', validEmail, loginController.create);

module.exports = router;
