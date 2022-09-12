import { notes,credentials, wifi, cards } from "@prisma/client"
export function verifyTitleExist(title:string|undefined,list : notes[]|credentials[]|cards[]){
  if(!list.length) false

  for(let i = 0; i< list.length; i++){
    if(list[i].title===title){
      return true
    }
  }
  return false
}

export function verifyIdExist(id:number|null,list : notes[]|credentials[]|wifi[]| cards[]){
  if(!list.length) false

  for(let i = 0; i< list.length; i++){
    if(list[i].id===id){
      return true
    }
  }
  return false
}