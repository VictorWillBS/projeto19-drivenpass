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