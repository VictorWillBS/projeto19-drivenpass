import { Request,Response } from "express";
import { wifiData } from "../types/wifiType";
import * as wifiService from "../services/wifiService";
import { wifi } from "@prisma/client";

export async function createWifi(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const body:wifiData= req.body;
  await wifiService.createWifi(body,token)
  res.status(201).send('Wifi Created.')
}

export async function getWifis(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const wifis : wifi[] | null= await wifiService.getWifis(token)
  res.status(200).send(wifis)
}

export async function getWifiById(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const id:number = Number(req.params.id)
  const wifis : wifi[] | null = await wifiService.getWifiById(token,id)
  res.status(200).send(wifis)
}

export async function deleteWifi(req:Request,res:Response){
  const token:{id:string}= res.locals.tokenDecoded;
  const id:number = Number(req.params.id)
  await wifiService.deleteWifi(token,id)
  res.status(200).send('Wifi Deleted.')
}