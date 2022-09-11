import * as sessionRepository from '../../repositories/sessionRepository';

export default async function getUserIdByTokenId(token:{id:string}) {
  const tokenId : number = Number(token.id);
  const userId:number|undefined = await sessionRepository.getUserIdByTokenId(tokenId);
  return userId
}
