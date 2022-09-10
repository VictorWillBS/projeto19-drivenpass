import prisma from "../database/database";
import { session } from "@prisma/client";
import { credentials } from "@prisma/client";
import { CrendentialPartial } from "../types/credentialTypes";
export async function getUserIdByTokenId(tokenId: number) {
  const sessionData: session | null = await prisma.session.findUnique({ where: { id: tokenId } })
  return sessionData?.userId
}

export async function getCredentialsByUserId(userId: number | any) {
  const credentials: credentials[] | null = await prisma.credentials.findMany({ where: { userId } })
  return credentials
}

export async function insertCredential(credentialData: CrendentialPartial | any, userId: number | any, encriptPassword: string | any) {
  await prisma.credentials.create(
    {
      data:
      {
        title: credentialData.title,
        username: credentialData.username,
        url: credentialData.url,
        password: encriptPassword,
        userId:userId
      }
    })
}

export async function getUserCredentialsById(userId:number|any,id:number|any) {
  console.log(id)
  const credentials: credentials[] | null = await prisma.credentials.findMany({ where: { userId,id } })
  return credentials
}