import { notes } from "@prisma/client";
import { noteData } from "../types/notesTypes";
import getUserIdByTokenId from "../utils/assetsFunctions/userToken";
import * as notesRepository from '../repositories/noteRepository'
import { verifyIdExist } from "../utils/assetsFunctions/verifyFunctions";

export async function createNote(noteData: noteData,token:{id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const titleExist:notes[]|null = await notesRepository.getNotesByTitleAndUserId(noteData.title,userId)
  if(titleExist.length){
    throw{code:'Conflict', message:'Title Already Exist.'}
  }
  await notesRepository.createNote(noteData,userId)

}

export async function getUserNote(token:{id:string}) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const notes: notes[]|null = await notesRepository.getUserNotes(userId)
  if(!notes.length){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  return notes
}

export async function getUserNoteById(token:{id:string},id:number) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const notes: notes[]|null = await notesRepository.getUserNotesById(userId,id)
  if(!notes.length){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  return notes
}
export async function deleteNote(token:{id:string},id:number) {
  const userId : number|undefined = await getUserIdByTokenId(token);
  const notes: notes[]|null = await notesRepository.getUserNotesById(userId,id)
  if(!notes.length){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  const noteExist : boolean = verifyIdExist(id,notes) 
  if(!noteExist){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  const deleteSucess: boolean = await notesRepository.deleteNote(userId,id)
  
  return deleteSucess
}