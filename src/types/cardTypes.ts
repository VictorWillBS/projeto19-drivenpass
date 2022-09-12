import { cards } from "@prisma/client";

export type CardData = Omit<cards,'id'|'createdAt'|'userId'>

enum EType {
  debit  = "debit",
  credit   = "credit",
  both  = "both"
}
export interface ICardToUser {
  id: Number;
  title:  String;
  name: String;  
  cardNumber: String;
  cvv : String;
  password:  String;
  expirationDate: String;
  isVirtual : Boolean
  type:EType;
  userId:Number;
  createdAt: Date;
}

