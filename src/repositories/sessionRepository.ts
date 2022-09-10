import prisma from "../database/database";
import {session} from '@prisma/client'
export async function getUserIdByTokenId(tokenId: number) {
  const sessionData: session | null = await prisma.session.findUnique({ where: { id: tokenId } })
  return sessionData?.userId
}
