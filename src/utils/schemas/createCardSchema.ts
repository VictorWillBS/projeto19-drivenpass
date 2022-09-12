import joi from 'joi';

const createCardSchema = joi.object({
  title:joi.string().required(),
  name:joi.string().required(),  
  cardNumber:joi.string().creditCard().required(),
  cvv: joi.string().required(),
  password:joi.string().required(),
  expirationDate: joi.string().required(),
  isVirtual:joi.boolean(),
  type :joi.alternatives().allow("debit","credit","both")
})

export default createCardSchema