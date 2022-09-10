import { credentials } from '@prisma/client';
import { CrendentialPartial } from '../types/credentialTypes';
import * as cryptData from '../utils/assetsFunctions/cryptData';
import * as credentialRepository from '../repositories/crendentialsRepositorys';
export async function getUserIdByTokenId(tokenId : number) {
  const userId:number|undefined = await credentialRepository.getUserIdByTokenId(tokenId);
  return userId
}

export async function createCredential(credentialData:CrendentialPartial,token:{id:string}) {
  const tokenId : number = Number(token.id);
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const credentials:credentials[] = await credentialRepository.getCredentialsByUserId(userId);
  const verifyTitle = verifyCredentialTitleExist(credentialData.title,credentials);
  if(verifyTitle){
    throw{code:'Conflict', message:'Title Already Exist.'}
  }
  const encriptPassword :string|null = cryptData.encript(credentialData.password);
  await credentialRepository.insertCredential(credentialData,userId,encriptPassword);
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

export async function getCredential(token:{id:string}) {
  const tokenId : number = Number(token.id);
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const credentials:credentials[] = await credentialRepository.getCredentialsByUserId(userId);
  decriptCredentialPasswords(credentials)
  return credentials
}

export async function getUserCredentialByID(token:{id:string},id:number) {
  const tokenId : number = Number(token.id);
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const credentials:credentials[] = await credentialRepository.getUserCredentialsById(userId,id);
  if(!credentials.length){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  decriptCredentialPasswords(credentials)
  return credentials
}

function decriptCredentialPasswords(credentials:credentials[]){
  credentials.forEach((credential)=>{
    const decriptPassword = cryptData.decript(credential.password)
    credential.password=decriptPassword
  })
}