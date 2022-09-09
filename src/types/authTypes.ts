import {users} from "@prisma/client";

export type CreateUser = Omit<users,'id' | 'createdAt'>;
export type UserInfo = Partial<CreateUser>;
export type UserEmail= Pick<CreateUser,'email'>|any;
