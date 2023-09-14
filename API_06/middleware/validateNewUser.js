const Joi = require('joi');

const checkNewUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(50).required(),
}).required().messages({
  'any.required': 'O campo {#label} é obrigatório',
  'string.empty': 'O campo {#label} não pode estar vázio',
  'string.base': 'O campo {#label} deve ser um texto',
  'string.min': 'O campo {#label} deve ter no mínimo {#limit} caracteres',
  'string.max': 'O campo {#label} deve ter no máximo {#limit} caracteres',
});

async function validateNewUser(req, res, next) {
  const { email, password } = req.body;
  const { error } = checkNewUser.validate({ email, password });

  if (error !== undefined) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
}

module.exports = {
  validateNewUser,
};
