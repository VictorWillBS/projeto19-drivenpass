import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
export function gerateJwt(data:number,timestampNow?:number){
  const config =   { expiresIn: 30 } //30 minutos em segundos
  const secret :any = process.env.JWT_SECRET
  const content = {id:data}
  const newToken = jwt.sign(content,secret,config)

  return newToken
}
