import { wifiData } from "../types/wifiType";
import getUserIdByTokenId from "../utils/assetsFunctions/userToken";
import * as wifiRepository from "../repositories/wifiRepository";
import * as cryptData from '../utils/assetsFunctions/cryptData'
export async function createWifi(wifiData:wifiData, tokenId: {id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const encryptedPassword: string= cryptData.encript(wifiData.password)
  await wifiRepository.insertWifi(wifiData,userId,encryptedPassword)
  return true
}