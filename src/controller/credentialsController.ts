import { Request,Response } from "express";
import { credentials } from "@prisma/client";
import * as credentialService from '../services/credentialService'

export async function createCredential(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const body:credentials = req.body;
  await credentialService.createCredential(body,token);
  res.status(201).send('Credential Created.');
}

export async function getCredentials(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const credential : credentials[]|null= await credentialService.getCredential(token)
  res.status(200).send(credential)
}

export async function getUserCredentialByID(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const id : number = Number(req.params.id);
  const credential : credentials[]|null= await credentialService.getUserCredentialByID(token,id);
  res.status(200).send(credential);
}

export async function deleteCredential(req:Request,res:Response){
  const token:{id:string}= res.locals.tokenDecoded;
  const id : number = Number(req.params.id);
  await credentialService.deleteCredential(token,id);
  res.status(200).send('Sucessful Delete.');
}