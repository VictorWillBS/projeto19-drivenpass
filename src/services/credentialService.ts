import { credentials } from '@prisma/client';
import { CrendentialPartial } from '../types/credentialTypes';
import * as cryptData from '../utils/assetsFunctions/cryptData';
import * as credentialRepository from '../repositories/crendentialsRepositorys';
export async function getUserIdByTokenId(tokenId : number) {
  const userId:number|undefined = await credentialRepository.getUserIdByTokenId(tokenId)
  return userId
}

export async function createCredential(credentialData:CrendentialPartial,token:{id:string}) {
  const tokenId : number = Number(token.id)
  const userId : number|undefined = await getUserIdByTokenId(tokenId)
  const credentials:credentials[] = await credentialRepository.getCredentialsByUserId(userId)
  const verifyTitle = verifyCredentialTitleExist(credentialData.title,credentials)
  if(verifyTitle){
    throw{code:'Conflict', message:'Title Already Exist.'}
  }
  const encriptPassword :string|null = cryptData.encript(credentialData.password);
  try {
    await credentialRepository.insertCredential(credentialData,userId,encriptPassword)
  } catch (error) {
    console.log(error)
  } 

}

function verifyCredentialTitleExist(title:string|undefined,credentialList : credentials[]){
  if(!credentialList.length) false

  for(let i = 0; i< credentialList.length; i++){
    if(credentialList[i].title===title){
      return true
    }
  }
  return false
}