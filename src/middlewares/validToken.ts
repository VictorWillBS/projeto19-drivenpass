import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function verifyToken(req:Request,res:Response, next:NextFunction){

  const token:string|any = req.headers.authorization;
  const JWT_SECRET : string|any= process.env.JWT_SECRET ;
  
  try{
    const tokenIsValid: string|any= jwt.verify(token,JWT_SECRET);
    res.locals.tokenDecoded = tokenIsValid
    next()
  }catch(error){
    res.status(401).send('Invalid Token.')
  }
}