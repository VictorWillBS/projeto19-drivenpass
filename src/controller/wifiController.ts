import { Request,Response } from "express";
import { wifiData } from "../types/wifiType";
import * as wifiService from "../services/wifiService"
export async function createWifi(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const body:wifiData= req.body;
  await wifiService.createWifi(body,token)
  res.status(200).send('Wifi Created.')
}