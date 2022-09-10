import { Request,Response } from "express";
import { credentials } from "@prisma/client";
import * as credentialService from '../services/credentialService'

export async function createCredential(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const body:credentials = req.body
  await credentialService.createCredential(body,token)
  res.status(201).send('Credential Created.')
}