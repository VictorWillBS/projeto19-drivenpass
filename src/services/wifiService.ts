import decriptListPasswords from "../utils/assetsFunctions/decriptFunctions";
import { wifiData } from "../types/wifiType";
import getUserIdByTokenId from "../utils/assetsFunctions/userToken";
import * as wifiRepository from "../repositories/wifiRepository";
import * as cryptData from '../utils/assetsFunctions/cryptData'
import { wifi } from "@prisma/client";
import { verifyIdExist } from "../utils/assetsFunctions/verifyFunctions";

export async function createWifi(wifiData:wifiData, tokenId: {id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const encryptedPassword: string= cryptData.encript(wifiData.password)
  await wifiRepository.insertWifi(wifiData,userId,encryptedPassword)
  return true
}

export async function getWifis(tokenId: {id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const wifis : wifi[] = await wifiRepository.getUserWifis(userId)
  if(!wifis.length){
    throw{code: 'Not Found', message:'Wifi Not Founded'}
  }
  decriptListPasswords(wifis)
  return wifis
}

export async function getWifiById(tokenId: {id:string},id:number) {
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const wifis : wifi[] = await wifiRepository.getWifiById(userId,id)
  if(!wifis.length){
    throw{code: 'Not Found', message:'Wifi Not Founded'}
  }
  decriptListPasswords(wifis)
  return wifis
}

export async function deleteWifi(tokenId: {id:string},id:number) {
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const wifis : wifi[] = await wifiRepository.getWifiById(userId,id)
  if(!wifis.length){
    throw{code: 'Not Found', message:'Wifi Not Founded'}
  }
  const wifiExist = verifyIdExist(id,wifis)
  if(!wifiExist){
    throw{code: 'Not Found', message:'Wifi Not Founded'}
  }
  await wifiRepository.deleteWifi(userId,id)
  return true
}