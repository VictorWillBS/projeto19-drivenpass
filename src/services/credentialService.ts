import { credentials } from '@prisma/client';
import { CrendentialPartial } from '../types/credentialTypes';
import * as cryptData from '../utils/assetsFunctions/cryptData';
import * as credentialRepository from '../repositories/crendentialsRepositorys';
import { verifyTitleExist,verifyCategoryElementExist } from '../utils/assetsFunctions/verifyFunctions';
import getUserIdByTokenId from '../utils/assetsFunctions/userToken';

export async function createCredential(credentialData:CrendentialPartial,token:{id:string}) {
  const tokenId : number = Number(token.id);
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const credentials:credentials[] = await credentialRepository.getCredentialsByUserId(userId);
  const titleExist = verifyTitleExist(credentialData.title,credentials);
  if(titleExist){
    throw{code:'Conflict', message:'Title Already Exist.'}
  }
  const encriptPassword :string|null = cryptData.encript(credentialData.password);
  await credentialRepository.insertCredential(credentialData,userId,encriptPassword);
}

export async function getCredential(token:{id:string}) {
  const tokenId : number = Number(token.id);
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const credentials:credentials[] = await credentialRepository.getCredentialsByUserId(userId);
  if(!credentials.length){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
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

export async function deleteCredential(token:{id:string},id:number){
  const tokenId : number = Number(token.id);
  const userId : number|undefined = await getUserIdByTokenId(tokenId);
  const credentials:credentials[] = await credentialRepository.getCredentialsByUserId(userId);
  if(!credentials.length){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  const credentialExist = verifyCategoryElementExist(id,credentials)
  if(!credentialExist){
    throw{ code:'Not Found', message:'Credential not founded.'}
  }
  await credentialRepository.deleteCredential(userId,id)
}


function decriptCredentialPasswords(credentials:credentials[]){
  credentials.forEach((credential)=>{
    const decriptPassword = cryptData.decript(credential.password)
    credential.password=decriptPassword
  })
}
