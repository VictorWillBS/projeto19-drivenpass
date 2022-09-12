import { Request,Response } from "express";
import { cards } from "@prisma/client";
import { CardData } from "../types/cardTypes";
import * as cardService from '../services/cardSerivce'
export async function createCard(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const body: CardData = req.body;  
  await cardService.createCard(body,token)
  res.status(201).send('Card Created')
}

export async function getCards(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const cards: cards[] =await cardService.getCards(token)
  res.status(200).send(cards)
}

export async function getCardById(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const id:number = Number(req.params.id)
  const cards: cards[] =await cardService.getCardById(token,id)
  res.status(200).send(cards)
}