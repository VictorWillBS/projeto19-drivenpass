import { Request,Response } from "express";
import { CreateUser, UserInfo } from "../types/authTypes";
import * as authService from '../services/authService'
export async function signup(req:Request,res:Response){
  const body : CreateUser = req.body;
  await authService.insertUser(body);
  res.status(201).send('User Created.');
}

export async function singin(req:Request,res:Response) {
  const body : UserInfo = req.body;
  const token = await authService.userLogin(body)
  res.status(200).send(token)
}