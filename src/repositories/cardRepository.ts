import { cards } from "@prisma/client";
import prisma from "../database/database";
import { CardData } from "../types/cardTypes";

export async function getCards(userId: number|any) {
  const cards: cards[] | null=  await prisma.cards.findMany({where:{userId}})
  return cards
}
export async function getCardById(userId: number|any, id:number) {
  const cards: cards[] | null=  await prisma.cards.findMany({where:{userId,id}})
  return cards
}

export async function insertCard(cardData:CardData,userId:number|any){
  try {
    await prisma.cards.create({data:{...cardData,userId}})
    
  } catch (error) {
    
    console.log(error)
  }
}