import { cards,credentials, wifi } from "@prisma/client"
import * as cryptData from '../assetsFunctions/cryptData'
export default function decriptListPasswords(list: wifi[]|credentials[]|cards[]){
  list.forEach((item)=>{
    const decriptPassword = cryptData.decript(item.password)
    item.password=decriptPassword
  })
}