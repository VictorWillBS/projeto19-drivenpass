import { wifi } from "@prisma/client";
import prisma from "../database/database";
import { wifiData } from "../types/wifiType";
export async function insertWifi(wifiData:wifiData,userId:number|any,encryptedPassword:string| any) {
    await prisma.wifi.create({data:{title:wifiData.title,wifiName:wifiData.wifiName,password:encryptedPassword,userId:userId}})
  return true
}

export async function getUserWifis(userId:number|any) {
  const wifis:wifi[] = await prisma.wifi.findMany({where:{userId}})
  return wifis
}

export async function getWifiById(userId:number|any,id:number|any) {
  const wifis:wifi[] = await prisma.wifi.findMany({where:{userId,id}})
  return wifis
}

export async function deleteWifi(userId:number|any,id:number|any) {
  await prisma.wifi.deleteMany({where:{userId,id}})
  return true
}

