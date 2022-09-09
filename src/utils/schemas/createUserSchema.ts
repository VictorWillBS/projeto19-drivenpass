import joi from 'joi';
const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const createUserSchema = joi.object({
  name:joi.string().required(),
  email:joi.string().email().required(),
  password: joi.string().min(10).required()
})

export default createUserSchema