import prisma from "../database/database";
import { wifiData } from "../types/wifiType";
export async function insertWifi(wifiData:wifiData,userId:number|any,encryptedPassword:string| any) {
    await prisma.wifi.create({data:{title:wifiData.title,wifiName:wifiData.wifiName,password:encryptedPassword,userId:userId}})
  return true
}