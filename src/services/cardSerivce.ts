import { cards, prisma } from '@prisma/client';
import { CardData } from '../types/cardTypes';
import * as cryptData from '../utils/assetsFunctions/cryptData'
import getUserIdByTokenId from '../utils/assetsFunctions/userToken';
import * as cardRepository from '../repositories/cardRepository'
import { verifyTitleExist } from '../utils/assetsFunctions/verifyFunctions';


export async function createCard(cardData: CardData,token:{id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const cards: cards[] =  await cardRepository.getCards(userId);
   const titleExiste = verifyTitleExist(cardData.title,cards);
  if(titleExiste){
    throw{code:'Conflict', message: 'Card Already Exist.'}
  }
  const encriptCardData:CardData = encryptCardData(cardData);
  
  await cardRepository.insertCard(encriptCardData,userId);
}

export async function getCards(token:{id:string}) {
  console.log('cheguei aq')
  const userId : number|undefined = await getUserIdByTokenId(token);
  const cards: cards[] =  await cardRepository.getCards(userId);
  if (!cards.length){
    throw{code:'Not Found', message:'Cards Not Founded.'}
  }
  decriptCardData(cards)
  return cards
}

export async function getCardById(token:{id:string},id:number) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const cards: cards[] =  await cardRepository.getCardById(userId,id);
  if (!cards.length){
    throw{code:'Not Found', message:'Cards Not Founded.'}
  }
  decriptCardData(cards)
  return cards
}


function encryptCardData(cardData: CardData){
  cardData.cvv = cryptData.encript(cardData.cvv)
  cardData.password = cryptData.encript(cardData.password)
  cardData.cardNumber = cryptData.encript(cardData.cardNumber)
  return cardData
}

function decriptCardData(cards:cards[]){
  cards.forEach((card)=>{
    card.cvv = cryptData.decript(card.cvv)
    card.password = cryptData.decript(card.password)
    card.cardNumber = cryptData.decript(card.cardNumber)
  })
}
