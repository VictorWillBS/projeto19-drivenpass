import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
export function gerateJwt(data:number,timestampNow?:number){
  const secret :any = process.env.JWT_SECRET
  const content = {id:data}
  const newToken = jwt.sign(content,secret)

  return newToken
}
