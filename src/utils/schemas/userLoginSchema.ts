import joi from 'joi';
const userLoginSchema = joi.object({
  email:joi.string().email().required(),
  password: joi.string().min(10).required()
})

export default userLoginSchema