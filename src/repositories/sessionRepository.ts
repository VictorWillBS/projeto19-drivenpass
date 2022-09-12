import prisma from "../database/database";
import {session} from '@prisma/client'
export async function getUserIdByTokenId(tokenId: number) {
  const sessionData: session | null = await prisma.session.findUnique({ where: { id: tokenId } })
  if(!sessionData?.id){
    throw{code:'Not Found', message:'Session Not Found'}
  }
  return sessionData?.userId
}
