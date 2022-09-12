import { cards, prisma } from '@prisma/client';
import { CardData } from '../types/cardTypes';
import * as cryptData from '../utils/assetsFunctions/cryptData'
import getUserIdByTokenId from '../utils/assetsFunctions/userToken';
import * as cardRepository from '../repositories/cardRepository'
import { verifyTitleExist } from '../utils/assetsFunctions/verifyFunctions';
import parseExpirateDateToDate from '../utils/assetsFunctions/parseExpirateDateToDate';
export async function createCard(cardData: CardData,token:{id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const cards: cards[] =  await cardRepository.getCards(userId);
  const titleExiste = verifyTitleExist(cardData.title,cards);
  if(titleExiste){
    throw{code:'Conflict', message: 'User Already Exist.'}
  }
  const encriptCardData:CardData = encryptCardData(cardData);
  encriptCardData.expirationDate = parseExpirateDateToDate(encriptCardData.expirationDate)
  await cardRepository.insertCard(encriptCardData,userId);
}

function encryptCardData(cardData: CardData){
  cardData.cvv = cryptData.encript(cardData.cvv)
  cardData.password = cryptData.encript(cardData.password)
  cardData.cardNumber = cryptData.encript(cardData.cardNumber)
  return cardData
}