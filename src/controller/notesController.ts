import { Request,Response } from "express";
import * as noteService from '../services/notesService'
import { noteData } from "../types/notesTypes";
import { notes } from "@prisma/client";
import { not } from "joi";

export async function createNotes(req:Request,res:Response){
  const token:{id:string}= res.locals.tokenDecoded;
  const body:noteData= req.body;
  await noteService.createNote(body,token)
  res.status(201).send('Note Created.');  
}
export async function getUserNote(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const notes:notes[]|null = await noteService.getUserNote(token)
  res.status(200).send(notes); 
}

export async function getUserNoteById(req:Request,res:Response) {
  const token:{id:string}= res.locals.tokenDecoded;
  const id: number =Number(req.params.id)
  const notes:notes[]|null = await noteService.getUserNoteById(token,id)
  res.status(200).send(notes); 
}

export async function deleteNote(req:Request,res:Response){
  const token:{id:string}= res.locals.tokenDecoded;
  const id: number =Number(req.params.id)
  await noteService.deleteNote(token,id)
  res.status(200).send('Note Deleted.'); 
}