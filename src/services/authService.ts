import { session, users } from ".prisma/client";
import * as authRepository from "../repositories/authRepository"
import { CreateUser,UserEmail,UserInfo } from "../types/authTypes";
import * as criptFunctions from '../utils/assetsFunctions/cryptData';
import * as jwtFunctions from '../utils/assetsFunctions/jwtFunctions'


export async function insertUser(userdata : CreateUser) {
  const userExist = await getUserByEmail(userdata.email)
  if(userExist){
    throw{code:'Conflict', message:'User already exist.'}
  }
  const newPassord = criptFunctions.encriptByHash(userdata.password)
  await authRepository.createUser(userdata,newPassord)
}

async function  getUserByEmail(email:UserEmail) {
  const user = await authRepository.getUserByEmail(email)
  return user
}

export async function userLogin(userdata:UserInfo) {
  const user :users | any= await getUserByEmail(userdata.email)

  if(!user){
    throw{code:'Not Found', message : 'User Not Found.'}
  }
  const isSamePassword = criptFunctions.comparePassword(userdata.password,user.password)
  if(!isSamePassword){
    throw{ code:'Unauthorized',message:'Email or Password is Invalid.'}
  }

  const sessionCreated:session | null =  await authRepository.login(user.id)

  const token = jwtFunctions.gerateJwt(sessionCreated.id) 

  if(!token){
    throw{code : 'Internal Server Erro', message: 'Token error.'}
  }
  return token
}