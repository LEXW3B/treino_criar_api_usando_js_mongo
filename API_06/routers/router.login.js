const express = require('express');

const router = express.Router();

const loginController = require('../app/src/controller/login.controller');
const { validateNewUser } = require('../middleware/validateNewUser');

router.get('/', (_req, res) => {
  res.send("I'm me, and you who are is?");
});

router.get('/login', loginController.getAll);
router.get('/login/:id', loginController.getOne);
router.post('/login', validateNewUser, loginController.create);
router.delete('/login/:id', loginController.remove);

module.exports = router;
