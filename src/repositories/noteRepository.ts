import { notes } from "@prisma/client";
import prisma from "../database/database";
import { noteData } from "../types/notesTypes";

export async function createNote(noteData:noteData,userId:number|any) {
  await prisma.notes.create({data:{title:noteData.title,note: noteData.note,userId}})
}

export async function getUserNotes(userId:number|any) {
  const notes:notes[] | null=await prisma.notes.findMany({where:{userId}});
  return notes
}
export async function getNotesByTitleAndUserId(title:string|any,userId:number|any) {
  const notes:notes[] | null=await prisma.notes.findMany({where:{userId,title}});
  console.log(title+ " e " + userId)
  return notes
}


export async function getUserNotesById(userId:number|any,id:number|any) {
  const notes:notes[] | null=await prisma.notes.findMany({where:{userId,id}});
  return notes
}

export async function deleteNote(userId:number|any,id:number|any){
  await prisma.notes.deleteMany({ where:{userId,id}})
  return true
}