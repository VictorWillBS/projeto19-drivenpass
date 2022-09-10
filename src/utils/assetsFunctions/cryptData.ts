import bcrypt from 'bcrypt';
import Cryptr from 'cryptr'
import dotenv from 'dotenv'
dotenv.config()
const CRYPTR_SECRET : any=process.env.CRYPTR_SECRET
const cryptr = new Cryptr(CRYPTR_SECRET)
export function encriptByHash(password:string){
  const newPassword = bcrypt.hashSync(password,10);
  return newPassword
}
export function comparePassword(password:string|any, encryptedPassword:string){
  const isSame = bcrypt.compareSync(password,encryptedPassword);
  return isSame
}

export function encript(password:string|any){
  const newPassword = cryptr.encrypt(password);
  return newPassword
}

export function decript(dataEncrypted:any){
  const dataDecripted = cryptr.decrypt(dataEncrypted)
  return dataDecripted
}