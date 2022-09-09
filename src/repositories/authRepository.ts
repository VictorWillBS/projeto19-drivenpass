import prisma from "../database/database";
import { CreateUser,UserEmail, UserInfo} from "../types/authTypes";
import { session } from ".prisma/client";

export async function getUserByEmail(email:UserEmail) {
  
  const user = await prisma.users.findUnique({where:{email:email}})
  return user
}

export async function createUser(userData:CreateUser,newPassword:string) {
  await prisma.users.create({data:{email:userData.email,name:userData.name,password:newPassword}})

}

export async function login(userId:number) :Promise<session>{
  const sessionCreated:session = await prisma.session.create({data:{userId}})
  return sessionCreated
}