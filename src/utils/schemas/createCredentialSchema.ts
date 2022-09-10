import joi from 'joi';
const re = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
const CredentialSchema = joi.object({
  title:joi.string().required(),
  username:joi.string().required(),
  url:joi.string().regex(re).required(),
  password: joi.string().required()
})

export default CredentialSchema

