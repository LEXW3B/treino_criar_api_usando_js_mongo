function validEmail(req, res, next) {
  const { email } = req.body;
  const REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email === undefined || email === '' || email === null) {
    res.status(400).json({ message: 'Invalid email' });
  } else if (email.length < 3) {
    res.status(400).json({ message: 'Invalid email' });
  } else if (!REGEX.test(email)) {
    res.status(400).json({ message: 'Invalid email' });
  } else {
    next();
  }
}

function validPassword(req, res, next) {
  const { password } = req.body;
  const REGEX = /^[a-zA-Z0-9]{6,}$/;

  if (password === undefined || password === '' || password === null) {
    res.status(400).json({ message: 'Invalid password 1' });
  } else if (password.length < 6) {
    res.status(400).json({ message: 'Invalid password 2' });
  } else if (!REGEX.test(password)) {
    res.status(400).json({ message: 'Invalid password 3' });
  } else {
    next();
  }
}

module.exports = {
  validEmail,
  validPassword,
};
