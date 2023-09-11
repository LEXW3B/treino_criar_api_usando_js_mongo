function validEmail(req, res, next) {
  const { email } = req.body;
  const REGEX = /^[a-zA-Z]{3,}@.*\..*$/;

  if (email === undefined || email === '' || email === null) {
    res.status(400).json({ message: 'Invalid email' });
  } else if (email < 3) {
    res.status(400).json({ message: 'Invalid email' });
  } else if (REGEX.test(email)) {
    next();
  } else {
    res.status(400).json({ message: 'Invalid email' });
  }
}

module.exports = {
  validEmail,
};
