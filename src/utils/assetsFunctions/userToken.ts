import * as credentialRepository from '../../repositories/sessionRepository';

export default async function getUserIdByTokenId(tokenId : number) {
  const userId:number|undefined = await credentialRepository.getUserIdByTokenId(tokenId);
  return userId
}
