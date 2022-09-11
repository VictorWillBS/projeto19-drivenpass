import joi from 'joi';
const createWifiSchema = joi.object({
  title:joi.string().required(),
  wifiName:joi.string().required(),
  password: joi.string().required()
})

export default createWifiSchema