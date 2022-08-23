const Joi = require('joi');

const User = Joi.object({
    email: Joi.string().email(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    phone: Joi.string(),
    address: Joi.string(),
    age: Joi.number(),
});

module.exports = User;