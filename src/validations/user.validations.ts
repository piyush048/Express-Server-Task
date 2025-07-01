import Joi from 'joi';

const createUserSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.number().min(10).required(),
});

const loginSchema = Joi.object({
    email : Joi.string().email().required(),
    password: Joi.string().required(),
})

export {createUserSchema, loginSchema};
